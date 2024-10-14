// Navbar.js
import React from 'react';
import './Navbar.css'; // Import the CSS styles for the Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/path/to/logo.png" alt="Logo" className="logo" /> {/* Update the path to your logo */}
        <span className="logo-text">Hotel Booking</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#bookings">Bookings</a></li>
        <li><a href="#profile">Profile</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
