import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './RecentBookings.css'; // Import the CSS for styling

const RecentBookings = () => {
  // Sample data for recent bookings
  const bookings = [
    { id: 1, name: 'John Doe', date: '2023-10-01' },
    { id: 2, name: 'Jane Smith', date: '2023-10-02' },
    // Add more bookings as needed
  ];

  return (
    <div className="recent-bookings">
      <h3 className="title">Recent Bookings</h3>
      <ul className="booking-list">
        {bookings.map(booking => (
          <li key={booking.id} className="booking-item">
            <span className="booking-name">
              <FontAwesomeIcon icon={faUser} className="icon" /> {booking.name}
            </span>
            <span className="booking-date">
              <FontAwesomeIcon icon={faCalendarAlt} className="icon" /> {booking.date}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentBookings;
