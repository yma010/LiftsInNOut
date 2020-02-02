import { connect } from 'react-redux';
import ListingsIndex from './listings_index';
import {
  fetchListings,
} from '../../actions/listings_action';

const msp = state => ({
  listings: Object.values(state.entities.listings)
});

const mdp = dispatch => ({
  fetchListings: () => dispatch(fetchListings()),
  fetchListing: id => dispatch(fetchListing(id))
});

export default connect(
  msp, null
)(ListingsIndex);

