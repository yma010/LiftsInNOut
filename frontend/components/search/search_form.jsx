import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import { DatePickerWrapper } from '../calender/calender';
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      lat: null,
      long: null,
      startDate: null,
      endDate: null,
      focused1: false,
      focused2: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setNewLocation = this.setNewLocation.bind(this);

    this.defaultAddress = '84 Withers St. Brooklyn, NY 11211';
  }

  componentDidMount() {
    const input = document.getElementById('location-input');
    this.autocomplete = new google.maps.places.Autocomplete(input);
    this.autocomplete.addListener('place_changed', this.setNewLocation);
  }

  setNewLocation() {
    const place = this.autocomplete.getPlace()
    this.setState({
      address: place.formatted_address,
      lat: place.geometry.location.lat(),
      long: place.geometry.location.lng()
    })
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const lat = this.state.lat || 34.0522342;
    const long = this.state.long || -118.2436849;

    let startDate;
    let endDate;

    if (this.state.startDate === null) {
      startDate = null;
    } else {
      startDate = moment(this.state.startDate).format("YYYY/MM/DD");
    }

    if (this.state.endDate === null) {
      endDate = null;
    } else {
      endDate = moment(this.state.endDate).format("YYYY/MM/DD");
    }

    const hash = `&lat=${lat}&long=${long}&checkin=${startDate}&checkout=${endDate}`

    this.props.history.push({
      pathname: '/listings',
      hash: hash
    })

  }


  render() {
    return (
      <div className='search-form-container'>
        <div className='welcome-message-container'>
          <h1 className='welcome-message'>
            Schedule your perfect day at your perfect gym anywhere
          </h1>
        </div>

        <form className='search-form'>
          <div className='location-search-container'>
            <label>WHERE</label>
            <input
              id='location-input'
              type="text"
              placeholder="Anywhere"
              onChange={this.handleChange('address')}
            />
          </div>
        <DatePickerWrapper/>
          <button className='search-submit' onClick={this.handleSubmit}>
            Search
          </button>

        </form>
      </div>
    )
  }
}

export default withRouter(SearchForm);
