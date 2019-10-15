import { connect } from 'react-redux'
import Search from './search';
import { fetchListings, fetchListing } from '../../actions/listings_action';
import { updateFilter } from '../../actions/filter_actions';

const msp = state => ({
  listings: Object.values(state.entities.listings),
  
})