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
    const input = document.getElementById('searchbar-input');
    this.autocomplete = new google.maps.places.Autocomplete(input);
    this.autocomplete.addListener(input, this.setDestination);
  }

  setDestination(){
    const destination = this.autocomplete.getPlace();
    this.setState({
      destination: destination.formatted_address,
      latitude: destination.geometry.location.lat(),
      longitude: destination.geometry.location.lng()
    })
    this.handleSubmit();
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
      <div className='searchbar'>
        <input type="text"
        id="searchbar-input"
        placeholder='Try "Los Angeles"'
        />
      </div>
    )
  }
}
export default withRouter(SearchBar);