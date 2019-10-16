import React from 'react';
import {withRouter} from 'react-router-dom';
class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      location: '',
      latitude: null,
      longitude: null
    }
    this.setDestination = this.setDestination.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    const input = document.getElementById('searchBar-input');
    this.autocomplete = new google.maps.places.Autocomplete(input);
    this.autocomplete.addListener('place_changed', this.setDestination);
  }

  setDestination(){
    const location = this.autocomplete.getPlace();
    this.setState({
      location: location.formatted_address,
      latitude: location.geometry.location.lat(),
      longitude: location.geometry.location.lng()
    })
    this.handleSubmit();
  }

  handleSubmit(e) {
    e.preventDefault();
    const lat = this.state.latitude || 34.0522;
    const lng = thisstate.longitude || -118.2437;
    const hash = `&lat=${lat}&lng=${lng}&checkin=null&checkout=null`
    this.props.history.push({
      pathname: '/listings',
      hash: hash
    })
  }

  render(){
    return(
      <div>
        <input type="text"
        id="searchbar-input"
        placeholder='Try "Los Angeles"'
        />
      </div>
    )
  }
}
export default withRouter(SearchBar);