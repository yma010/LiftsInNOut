import {
  RECEIVE_ALL_LISTINGS,
  RECEIVE_LISTING,
  REMOVE_LISTING
} from "../actions/listings_action";

import { merge } from 'lodash';

const listingReducer = (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
  case RECEIVE_ALL_LISTINGS:
    console.log(action.listings);//doitagain
    return merge({}, state, action.listings);
  case RECEIVE_LISTING:
    return merge({}, state, {[action.listing.id]: action.listing});
  case REMOVE_LISTING:
    let newState = merge({}, state);
    delete newState[action.listingId];
    return newState;
  default:
    return state;
  }
};

export default listingReducer