import React from 'react';
import MarkerManager from '../../../util/marker_manager';

class ListingsMap extends React.Component {

  componentDidMount(){
    const mapOptions={
      center: { lat: 34.0522, lng: 118.2437 },
      zoom: 10
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.listings);
  }

  componentDidUpdate(){
    this.MarkerManager.updateMarkers(this.props.listings)
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west} };
        this.props.updateFilter('bounds', bounds);
      });
      // google.maps.event.addListener(this.map, 'click', (e) => {
      //   const coords = getCoordsObj(e.latlng);
      //   this.handleClick(coords);
      // });
  };

  render(){
    <div id='map-container' ref={map => this.mapNode = map}></div>
  }
}

export default ListingsMap;