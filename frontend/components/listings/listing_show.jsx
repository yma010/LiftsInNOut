import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../nav/nav_bar'
import ListingsPhoto from "./listings_photos";
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
          <ListingsPhoto listings={listing} />
          <div className='listings-show-details'>
            
            <h3>{listing.name}</h3>
            <div className="show-location">{listing.location}</div>
            <div className="show-equipment">
              {listing.benches} {listing.benches === 1 ? "bench · " : "benches · "} 
              &nbsp;{listing.power_rack} {listing.power_rack === 1 ? "power rack · " : "power racks · "}
              &nbsp;{listing.deadlift_platform} {listing.deadlift_platform === 1 ? "deadlift platform " : "deadlift platforms "}
            </div>
            <div className="listing-desc-header">
              About
              </div>
            <p>{listing.description}</p>
            <div className="border"> </div>
            <Link to="/listings">Back to Index</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingShow;
