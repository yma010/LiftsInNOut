import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import { withRouter } from 'react-router-dom';

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

    const lat = this.state.lat || 40.716880;
    const long = this.state.long || -73.948810;

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

          <div className='date-picker-container'>
            <div className='start-date-picker'>
              <label>CHECK-IN</label>
              <SingleDatePicker
                date={this.state.startDate} 
                onDateChange={startDate => this.setState({ startDate })} 
                focused={this.state.focused1} 
                onFocusChange={({ focused: focused1 }) => this.setState({ focused1 })}
                id="start-date"
                className="date-input" 
                numberOfMonths={1}
                placeholder={'mm/dd/yyyy'}
                readOnly={true}
              />
            </div>

            <div className='end-date-picker'>
              <label>CHECKOUT</label>
              <SingleDatePicker
                date={this.state.endDate} 
                onDateChange={endDate => this.setState({ endDate })} 
                focused={this.state.focused2} 
                onFocusChange={({ focused: focused2 }) => this.setState({ focused2 })} 
                id="end-date" 
                className="date-input"
                numberOfMonths={1}
                placeholder={'mm/dd/yyyy'}
                anchorDirection="right"
                readOnly={true}
              />
            </div>
          </div>

          <button className='search-submit' onClick={this.handleSubmit}>
            Search
          </button>

        </form>
      </div>
    )
  }
}

export default withRouter(SearchForm);
