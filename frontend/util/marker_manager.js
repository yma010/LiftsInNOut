export default class MarkerManager {
  constructor(map, handleMarkerClick){
    this.map = map;
    this.markers = {};

    this.handleMarkerClick = handleMarkerClick;
  }
  
  updateMarkers(listings){
    let listingsObj = {};
    listings.forEach( listing => (listingsObj[listings.id] = listing));

    listings
      .filter(listing => !this.markers[listing.id])
      .forEach(newListing => this.createMarker(newListing));

    Object.keys(this.markers)
      .filter(listingId => !listingsObj[listingId])
      .forEach(listingId => this.removeMarker(this.markers[listingId]));
  }

  createMarker(listings){
    let pos = {lat: listings.latitude, lng: listings.longitude}
    console.log(listings.price)

    if (!this.markers[listings.id]) {
    let marker = new google.maps.Marker({
      position: pos, 
      map: this.map,
      label: {
        text: `$${listings.price}`,
        fontSize: '13px',
        fontWeight: 'bold',
        color: 'black'
      }, 
      icon: {
        path: 'm22,-28.38281l-44,0l0,20l16,0l6,5l6,-5l16,0l0,-20z',
        labelOrigin: new google.maps.Point(0, -18),
        fillColor: "white",
        fillOpacity: 1,
        scale: 1.15,
        strokeColor: "484848",
        strokeWeight: 0.3
      }
    });

    this.markers[listings.id] = marker;
    let mapMarker = this.markers[listings.id];

    mapMarker.addListener("click", () =>
      this.handleMarkerClick(listings)
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
