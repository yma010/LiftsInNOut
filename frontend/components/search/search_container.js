import { connect } from 'react-redux'
import Search from './search';
import { fetchListings, fetchListing } from '../../actions/listings_action';
import { updateFilter } from '../../actions/filter_actions';

const msp = state => {
  return ({
    listings: Object.values(state.entities.listings),
    searchCoords: state.ui.search.coords
  });
};

const mdp = dispatch => ({
  fetchListings: () => dispatch(fetchListings()),
  fetchListing: id => dispatch(fetchListing(id)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(msp, mdp)(Search);