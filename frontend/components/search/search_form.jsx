import React from 'react';
import { withRouter } from 'react-router-dom';
import { fetchListings } from '../../util/listings_api_util';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      latitude: null,
      longitude: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setDestination = this.setDestination.bind(this);
  }

  componentDidMount(){
    const input = document.getElementById('location-input');
    this.autocomplete = new google.maps.places.Autocomplete(input);
    this.autocomplete.addListener('place_changed', this.setDestination);
  }

  setDestination(){
    const destination = this.autocomplete.getPlace()
    this.setState({
      location: destination.formatted_address,
      latitude: destination.geometry.location.lat(),
      longitude: destination.geometry.location.lng()
    })
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
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
}