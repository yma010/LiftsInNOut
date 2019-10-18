![](https://github.com/yma010/LiftsInNOut/blob/activeStorage/app/assets/images/lifts_in_n_out_logo.png)
# [LiftsInNOut](https://liftsinnout.herokuapp.com/#/)
______

Travelling as an athlete with a strict training regime is tough. Let us help you find an accommadating training facility to suit your specialized needs!

<img height="auto" width="100%" src="https://github.com/yma010/LiftsInNOut/blob/activeStorage/app/assets/images/readme/liftsinnout-demo.gif"/> 

______
# Technologies
* React/Redux
* Javascript
* Ruby on Rails
* PostgresSQL
* Amazon Web Services
* Google Maps API
* PlacesAPI
* Webpack
____
# Features
----
## User Authentication
* Users can log in/sign up/log out.
* Invalid log in information will trigger front and back end errors.
* Sign up form has required fields that will prevent submission if not filled. Invalid information will trigger front and back end errors.
----
## Listings
* Users can search for listings in a city of their choice. 
* Listings will populate locations based on the focus of the maps window.
* Users can navigate to populated locations via the index or directly clicking the price markers in the map window.
* Users can view a more detailed page of the listing such as their location address and facility details.
____
## Search
* Search function constructs a URL that is compliant with the GoogleMapsAPI service to fetch map data based on the longitude and latitude of the location.
* Search function can autocomplete location names
____
## Maps
* Users can view the listings through the maps window.

```
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
```
