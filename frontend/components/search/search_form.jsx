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
    const lng = this.state.longitude || -118.2437;
    const hash = `&lat=${lat}&lng=${lng}`
    this.props.history.push({
      pathname: '/listings',
      hash: hash
    })
  }

  render(){
    return(
    <div id="search-form" className="container">
      <div id="search-form" className="header">
        <h1 id="search-form" className="welcome-header">Need a place to train while travelling?</h1>
        <h2 id="search-form" className="welcome-subheader">Find a gym to suit your training needs for athletes by athletes</h2>
      </div>

      <form id="search-form" className="search-splash">
        <div className="search-location">
          <label>WHERE</label>
            <input id="location-input" type="text" placeholder="Anywhere" onChange={this.handleChange('location')}/>
        </div>
        <button className='search-submit' onClick={this.handleSubmit}>
          Search
        </button>
      </form>
    </div>
    )
  }
}

export default withRouter(SearchForm)