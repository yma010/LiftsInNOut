import { connect } from 'react-redux';
import ListingsIndex from './listings_index';
import {
  fetchListings,
} from '../../actions/listings_action';

const msp = state => {
  return ({
    listings: Object.values(state.entities.listings)
  });
};

const mdp = dispatch => ({
  fetchListings: () => dispatch(fetchListings()),
});

export default connect(
  msp,
  mdp
)(ListingsIndex);

