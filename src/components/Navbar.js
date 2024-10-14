import React from 'react';
import { Link } from 'react-router-dom';
import { FaHotel } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <FaHotel className="logo-icon" />
        <span className="logo-text">Hotel Booking</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bookings">Bookings</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;