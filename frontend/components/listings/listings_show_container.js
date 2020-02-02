import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { fetchListing, fetchListings } from '../../actions/listings_action';

const msp = (state, ownProps) => {
  const listingId = ownProps.match.params.listingId;
  const listing = state.entities.listings[listingId];
  
  return { listing, listingId }
}

const mdp = dispatch => {
  return {
    fetchListing: id => dispatch(fetchListing(id)),
  }
}

export default connect(msp, mdp)(ListingShow);