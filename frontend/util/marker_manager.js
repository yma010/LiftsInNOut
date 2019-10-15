export default class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = {};

    this.handleMarkerClick = this.handleMarkerClick;
  }
  
  updateMarkers(listings){
    // debugger;
    let listingsObj = {};
    listings.forEach( listing => (listingsObj[listings.id] = listing));

    listings
      .filter(listing => !this.markers[listing.id])
      .forEach(newListing => this.createMarker(newListing));
    Object.keys(this.markers)
      .filter(listing => !this.markers[listing.id])
      .forEach(newListing => this.createMarker(newListing));
  }

  createMarker(listing){
    const pos = new google.maps.LatLng(listing.latitude, listing.longitude)
    
    if (!this.markers[listing.id]) {
    const marker = new google.maps.Marker({
      position: pos, 
      map: this.map,
      label: {
        text: `$${listing.price}`,
        fontSize: '12px',
        fontWeight: 'bold',
        color: 'white'
      }, 
      icon: {
        path: 'M24-8c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v32z',
        labelOrigin: new google.maps.Point(0, -18),
        fillColor: "white",
        fillOpacity: 1,
        scale: 1.15,
        strokeColor: "484848",
        strokeWeight: 0.3
      }
    });

    this.markers[listing.id] = marker;
    let mapMarker = this.markersplisting.id;

    mapMarker.addListener("click", () =>
      this.handleMarkerClick(listing)
    );
   }
  }

  removeMarker(marker) {
    if (this.markers[marker.id]) {
      this.markers[marker.id].setMap(null);
      delete this.markers[marker.id];
    }
  }
}
