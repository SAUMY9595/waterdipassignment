import React, { useState } from 'react';
import './DateSelector.css'; // Import the CSS file

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
        <label htmlFor="start-date">Start Date:</label>
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
          required
          className="date-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="end-date">End Date:</label>
        <input
          type="date"
          id="end-date"
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
          required
          className="date-input"
        />
      </div>
      <button className="filter-button" type="submit">Filter</button>
    </form>
  );
};

export default DateSelector;
