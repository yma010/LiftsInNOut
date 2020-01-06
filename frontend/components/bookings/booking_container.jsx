import { connect } from 'react-redux';
import { createBooking } from '../../actions/booking_actions';
import Booking from "./booking.jsx";
import {moment} from "moment";
const msp = (state, ownProps) => {
  // debugger;
  const listing = ownProps.listing;
  let bookings;
  if (listing.bookings) {
    bookings = Object.values(listings.bookings);
  }
  let currUserId = state.session.id;
  return {bookings, currUserId};
};

const mdp = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking))
});

export default connect(
  msp,
  mdp
)(Booking)


