import {RECEIVE_LISTING} from '../actions/listings_action'
import { RECEIVE_BOOKING, RECEIVE_BOOKINGS, RECEIVE_BOOKING_ERRORS, REMOVE_BOOKING} from '../actions/booking_actions';


const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_LISTING:
    return Object.assign({}, state, action.listing.bookings);
  case RECEIVE_BOOKINGS:
    return Object.assign({}, state, action.bookings);
  case RECEIVE_BOOKING:
    const newBooking = { [action.booking.id]: action.booking }
    return Object.assign({}, state, newBooking)
  case RECEIVE_BOOKING_ERRORS:
    return action.errors[0].responseJSON;
  case REMOVE_BOOKING:
    let newState = Object.assign({}, oldState);
    delete newState[action.bookingId];
    return newState;
  default:
    return state;
  }
};

export default bookingsReducer;