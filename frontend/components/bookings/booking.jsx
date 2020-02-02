
import React, { useState, useEffect } from 'react';
import {DatePickerWrapper} from '../calender/calender';

import { useDispatch, useSelector } from 'react-redux';
import { createBooking } from '../../actions/booking_actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export const Bookings = ({listings}) => {
  const dispatch = useDispatch();
  const currUser = useSelector(state => state.session.id);
  const bookingForm = {
    guests: 1, 
    startDate: null, 
    endDate: null,
    focused: false
  }
  const [guests, setGuests] = useState(1);


  const newBooking = (booking) => {
    dispatch(createBooking(booking))
  };
  
  console.log(guests)
  return(
    <div className="bookings-container">
      <form onSubmit={newBooking}>
        <DatePickerWrapper/>
        <div className="booking-dates-container">

        </div>
        {/* Regarding Guest State */}
          <div className="guests-button-container">
            <div className="butt-animation">
              <button className="guest-button"> <FontAwesomeIcon icon={faPlus}/> </button>
            </div>
              <p className="guests-val">{guests}</p><p className="guests-label">Guest(s)</p>
            <div className="butt-animation">
              <button className="guest-button"> <FontAwesomeIcon icon={faMinus} /> </button>
            </div>
          </div>

      </form>
    </div>
  )
}