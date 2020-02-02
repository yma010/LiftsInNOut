import React, { useState } from 'react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';

export const DatePickerWrapper = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focused1, setFocused1] = useState(false);
  const [focused2, setFocused2] = useState(false);

  return(
    <div className='date-picker-container'>
      <div className='start-date-picker'>
        <label>CHECK-IN</label>
        <SingleDatePicker
          date={startDate} 
          onDateChange={startDate => setStartDate(startDate)} 
          focused={focused1} 
          onFocusChange={() => setFocused1(!focused1)}
          id="start-date"
          numberOfMonths={1}
          placeholder={'mm/dd/yyyy'}
          readOnly={true}
        />
      </div>

      <div className='end-date-picker'>
        <label>CHECKOUT</label>
        <SingleDatePicker
          date={endDate} 
          onDateChange={endDate => setEndDate(endDate)} 
          focused={focused2} 
          onFocusChange={() => setFocused2(!focused2)} 
          id="end-date" 
          numberOfMonths={1}
          placeholder={'mm/dd/yyyy'}
          anchorDirection="right"
          readOnly={true}
        />
      </div>
    </div>
  )}

