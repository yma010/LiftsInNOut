import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';

class ListingsMap extends React.Component {
  constructor(props) {
    super(props);
    this.searchParams = new URLSearchParams(`${this.props.history.location.hash}`)

    const lat = parseFloat(this.searchParams.get('lat')) || 34.0522342;
    const long = parseFloat(this.searchParams.get('long')) || -118.2436849;

    const startDate = this.searchParams.get('checkin') || null;
    const endDate = this.searchParams.get('checkout') || null;

    this.center = {
      lat: lat,
      lng: long
    }

    this.mapOptions = {
      center: this.center,
      zoom: 13
    }

    this.dates = {
      startDate: startDate,
      endDate: endDate
    }

  }

  componentDidMount() {    
    this.map = new google.maps.Map(this.mapNode, this.mapOptions);

    this.MarkerManager = new MarkerManager(this.map);
    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.listings);
  }

  componentDidUpdate(prevProps) {
    if (this.props.history.location.hash !== prevProps.location.hash) {

      const newParams = new URLSearchParams(`${this.props.history.location.hash}`);
      const newLat = parseFloat(newParams.get('lat')) || 34.0522342;
      const newLong = parseFloat(newParams.get('long')) || -118.2436849;

      this.map.setCenter({
        lat: newLat,
        lng: newLong
      })
    }

    this.MarkerManager.updateMarkers(this.props.listings);
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const directions = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: directions.north, lng: directions.east },
        southWest: { lat: directions.south, lng: directions.west }
      }
      this.props.updateFilter({
        "bounds": bounds,
        "dates": this.dates
      })
    })
  }

  render(){
    let { listings } = this.props;

    return(
      <div id='map-container' ref={map => this.mapNode = map}></div>
    )
  }
}

export default withRouter(ListingsMap);