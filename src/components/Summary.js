import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import './Summary.css'; // Import the CSS for styling

const Summary = ({ data }) => {
  // Calculate summary metrics from data
  const totalVisitors = data.reduce((sum, item) => sum + item.visitors, 0);
  const totalBookings = data.length;

  return (
    <div className="summary">
      <div className="summary-item">
        <FontAwesomeIcon icon={faUsers} className="summary-icon" />
        <div>
          <h3>Total Visitors</h3>
          <p>{totalVisitors}</p>
        </div>
      </div>
      <div className="summary-item">
        <FontAwesomeIcon icon={faClipboardCheck} className="summary-icon" />
        <div>
          <h3>Total Bookings</h3>
          <p>{totalBookings}</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
