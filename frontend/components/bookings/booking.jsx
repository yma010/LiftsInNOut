
import React, { useState, useEffect } from 'react';
import {DatePickerWrapper} from '../calender/calender';

import { useDispatch, useSelector } from 'react-redux';
import { createBooking } from '../../actions/booking_actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

export const Bookings = ({listings}) => {
  const dispatch = useDispatch();
  const currUser = useSelector(state => state.session.id);
  const [startDate, endDate] = useSelector(state => {
    console.log(state)
    return ([state.startDate, state.endDate]);
  })
  const [guests, setGuests] = useState(1);
  const [price, setPrice] = useState(null)
  

  const newBooking = (booking) => {
    dispatch(createBooking(booking))
  };
  
  console.log(guests)
  return(
    <div className="bookings-container">
      <div className="bookings-listing-price">
        ${listings.price} <p className="price-per-day"> per day</p>
      </div>
      <div className="border"></div>
      <form onSubmit={newBooking}>
        <label className="date-label">Dates </label>
        <DatePickerWrapper/>
        <div className="booking-dates-container">

        </div>
        {/* Regarding Guest State */}
        <label className='guest-label'>Guests </label>
          <div className="guests-button-container">
            <div className="butt-animation">
              <button className="guest-button"> <FontAwesomeIcon icon={faPlus}/> </button>
            </div>
            <div className="guest-val-container">
              <input type='number' defaultValue={guests} className="guests-val"></input><p className="guests-label">Guest(s)</p>
            </div>
            <div className="butt-animation">
              <button className="guest-button"> <FontAwesomeIcon icon={faMinus} /> </button>
            </div>
          </div>
          {/* logic to handle pricing */}
          {/* <div className="cost container">
            Total Cost: {price * }
          </div> */}
        <div className="border"></div>
        <button className="button-submit"> Reserve </button>
        <p>You won't be charged just yet</p>
      </form>
    </div>
  )
}