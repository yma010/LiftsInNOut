import React from 'react';
import { Link } from 'react-router-dom';

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
    if (prevProps.listing.id != this.props.match.params.id) {
      debugger;
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
        <h3>{listing.name}</h3>
        <p>{listing.description}</p>
        <Link to="/listings">Back to Index</Link>
      </div>
    );
  }
}

export default ListingShow;
