import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../nav/nav_bar'

class ListingShow extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      listing: this.props.listings
    }
  }

  componentDidMount() {
    this.props.fetchListing(this.props.listingId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.listingId != this.props.match.params.listingId) {
      this.props.fetchListing(this.props.listingId);
    }
  }

  render() {
    const { listing } = this.props;
    if (!listing) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <NavBar/>
        <div className='listings-show-container'>
        <h3>{listing.name}</h3>
        <p>{listing.description}</p>
        <Link to="/listings">Back to Index</Link>
        </div>
      </div>
    );
  }
}

export default ListingShow;
