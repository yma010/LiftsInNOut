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
      },
      icon: {
        url: `${window.marker}`,
        scaledSize: new google.maps.Size(60, 40),
        origin: new google.maps.Point(0, 0),
        labelOrigin: new google.maps.Point(27, 19),
        back
      }
    })

    google.maps.event.addListener(marker, "mouseover", () => {
      const label = this.getLabel();
      label.color = "#008489";
      this.setLabel(label);
    });

    google.maps.event.addListener(marker, "mouseout", (e) => {
      const label = this.getLabel();
      label.color = "#484848";
      this.setLabel(label);
    });

        this.markers[listing.id] = marker;

  }

}