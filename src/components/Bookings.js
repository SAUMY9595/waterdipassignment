import React, { useState } from 'react';
import './Bookings.css';

const Bookings = ({ onAddBooking }) => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [country, setCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = {
      adults,
      children,
      country,
      arrival_date: new Date().toISOString().split('T')[0], // Current date
    };
    onAddBooking(newBooking);
    setAdults(1);
    setChildren(0);
    setCountry('');
  };

  return (
    <div className="bookings-container">
      <h2>Add a Booking</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Adults:</label>
          <input type="number" value={adults} onChange={(e) => setAdults(e.target.value)} min="1" required />
        </div>
        <div className="form-group">
          <label>Children:</label>
          <input type="number" value={children} onChange={(e) => setChildren(e.target.value)} min="0" required />
        </div>
        <div className="form-group">
          <label>Country:</label>
          <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required />
        </div>
        <button type="submit">Add Booking</button>
      </form>
    </div>
  );
};

export default Bookings;