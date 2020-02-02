import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      location: '',
      lat: null,
      long: null
    }
    this.setDestination = this.setDestination.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    const input = document.getElementById('searchbar-input');
    this.autocomplete = new google.maps.places.Autocomplete(input);
    this.autocomplete.addListener('place_changed', this.setDestination);
  }

  setDestination(){
    const destination = this.autocomplete.getPlace();
    this.setState({
      destination: destination.formatted_address,
      lat: destination.geometry.location.lat(),
      long: destination.geometry.location.lng()
    })
    this.handleSubmit();
  }

  handleSubmit(e) {
    if(e){
      e.preventDefault();
    }
    const lat = this.state.lat || 34.0522;
    const lng = this.state.long || -118.2437;

    const hash = `&lat=${lat}&long=${lng}&checkin=null&checkin=null`

    this.props.history.push({
      pathname: '/listings',
      hash: hash
    })
  }

  render(){
    return(
      <div className='searchbar'>
        <input 
          type="text"
          id="searchbar-input"
          placeholder='Try "Los Angeles"'
        />
      </div>
    )
  }
}
export default withRouter(SearchBar);