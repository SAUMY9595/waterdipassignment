import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './DateSelector.css';

const DateSelector = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onDateChange(startDate, endDate);
  };

  return (
    <form className="date-selector-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="start-date">
          <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon" /> Start Date:
        </label>
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="end-date">
          <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon" /> End Date:
        </label>
        <input
          type="date"
          id="end-date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="filter-button">Filter</button>
    </form>
  );
};

export default DateSelector;
