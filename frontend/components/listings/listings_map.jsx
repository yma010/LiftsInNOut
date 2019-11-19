import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

class ListingsMap extends React.Component {
  constructor(props){
    super(props);
    this.searchParams = new URLSearchParams(`${this.props.history.location.hash}`)
    
    const lat = parseFloat(this.searchParams.get('lat')) || 34.0522;
    const lng = parseFloat(this.searchParams.get('lng')) || -118.2437;

    this.createMap = this.createMap.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
  }
  
  componentDidMount(){
    this.createMap();
  }

  componentDidUpdate(prevProps){
    this.MarkerManager.updateMarkers(this.props.listings);
    if (this.props.searchCoords !== prevProps.searchCoords) {
      this.createMap();
    }
  }
  
  componentWillUnmount(){
    google.maps.event.clearListeners(this.map, 'idle');
  }

  createMap(){
    const mapOptions = {
      center: this.props.searchCoords,
      zoom: 13,
      gestureHandling: 'greedy' //Map always pans when user swipes/drags screen
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick);

    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.listings);
  }

  handleMarkerClick(listings) {
    this.props.history.push(`/listings/${listings.id}`);
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      let bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
        
      this.props.updateFilter('bounds', bounds);
    });
  };

  render(){
    let { listings } = this.props;

    return(
    <div id='map-container' ref={map => this.mapNode = map}></div>
    )
  }
}

export default withRouter(ListingsMap);