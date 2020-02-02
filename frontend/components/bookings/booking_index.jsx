import React, { Component } from 'react';
import NavBar from '../nav/nav_bar';
import { Route, Link, withRouter } from 'react-router-dom';
import BookingsIndexItem from './bookings_index_item'
import Nav from '../nav/nav';

class BookingIndex extends Component {
  constructor(props){
    super(props)
    this.fetchUserFutureBookings = this.fetchUserFutureBookings.bind(this);
    this.fetchUserPrevBookings = this.fetchUserPrevBookings.bind(this);
  }

  componentDidMount(){
    this.props.fetchListings();
    this.props.fetchBookings();
  }

  fetchUserPrevBookings() {
    const bookings = this.props.bookings;
    const userPrevBookings = bookings.map((booking, idx) => {
      const bookingDate = new Date(booking.end_date)
      if (booking.user_id === this.props.currentUserId && bookingDate < new Date()) {
        return (<BookingsIndexItem key={idx} booking={booking} />)
      }
    })

    return userPrevBookings;
  }

  fetchUserFutureBookings() {
    const bookings = this.props.bookings;
    const userFutureBookings = bookings.map((booking, idx) => {
      const bookingDate = new Date(booking.end_date)
      if (booking.user_id === this.props.currentUserId && bookingDate > new Date()) {
        return (<BookingsIndexItem key={idx} booking={booking} />)
      }
    })

    return userFutureBookings;
  }


  render(){
    if (this.props.bookings === undefined) { return null };

    const userPrevBookings = this.fetchUserPrevBookings();
    const userFutureBookings = this.fetchUserFutureBookings();

    return(
      <div className="booking-index">
        <NavBar/>
        <h2>Upcoming plans</h2>
        <div className="future-booking-container">
          {userFutureBookings}
        </div>

        <h2 className="prev-booking-header">Where you've been</h2>
        <div className="prev-booking-container">
          {userPrevBookings}
        </div>
      </div>
    )
  }
}

export default withRouter(BookingIndex);