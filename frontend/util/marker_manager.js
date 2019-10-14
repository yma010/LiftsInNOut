export default class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = {};
  }
  
  updateMarkers(listings){
    debugger;
    listings.forEach(listing => {
      if (!Object.keys(this.markers).includes(listing.id)) {
        this.createMarker(listing);
      }
    })
  }

  createMarker(listing){
    const pos = new google.maps.LatLng(listing.latitude, listing.longitude)
    const marker = new google.maps.Marker({
      pos, 
      map: this.map,
      listingId: listing.id,
      label: {
        text: `$${listing.price}`,
        fontSize: '12px',
        fontWeight: 'bold',
        color: 'white'
      }
    })
    this.markers[listing.id] = marker;
  }

}