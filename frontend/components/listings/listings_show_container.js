import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { fetchListing } from '../../actions/listings_action';

const msp = (state, ownProps) => {
  debugger;
  const listing = state.entities.listings[ownProps.match.params.listingId];
  
  return { listing }
}

const mdp = dispatch => {
  // debugger;
  return {
    fetchListing: id => dispatch(fetchListing(id))
  }
}

export default connect(msp, mdp)(ListingShow);