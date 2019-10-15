import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

class ListingsMap extends React.Component {
  constructor(props){
    super(props);

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
      center: { lat: 34.0522, lng: 118.2437 },
      zoom: 10,
      gestureHandling: 'greedy' //Map always pans when user swipes/drags screen
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick);
    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.listings);

  }

  handleMarkerClick() {
    this.props.history.push(`/listings/${listings.id}}`);
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west} };

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