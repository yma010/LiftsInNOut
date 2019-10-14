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
    // console.log(action.listings);
    return merge({}, state, action.listings);
  case RECEIVE_LISTING:
    debugger;
    const anotherState = merge({}, state);
    anotherState[action.listing.id] = action.listing;
    return anotherState;
  case REMOVE_LISTING:
    let newState = merge({}, state);
    delete newState[action.listingId];
    return newState;
  default:
    debugger;
    return state;
  }
};

export default listingReducer