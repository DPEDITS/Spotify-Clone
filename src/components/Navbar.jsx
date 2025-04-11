import React, { useState } from 'react';
import Logo from '../assets/spotify.png';
import '../components/Navbar.css';
import { FiHome } from "react-icons/fi";
import { IoSearch, IoFileTrayFullOutline } from "react-icons/io5";
import { PiLineVerticalLight } from "react-icons/pi";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="Spotify Logo" width="40" height="40" />
        <Link to="/" className="icon-button">
          <FiHome size={30} />
        </Link>
        <div className="search-container">
          <IoSearch className="search-icon" />
          <input
            type="text"
            className="search-bar"
            placeholder="What do you want to play?"
            alt="Ctrl+k"
          />
          <PiLineVerticalLight className="line" />
          <IoFileTrayFullOutline
            className={isHovered ? "browse" : "browsing"}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
        </div>
      <div className="nav-buttons">
        <button className="text-button1">Premium</button>
        <button className="text-button2">Support</button>
        <button className="text-button3">Download</button>
        <PiLineVerticalLight className="line1" />
        <button className="text-button4"><FaRegArrowAltCircleDown/> Install App</button>
        <Link to="/signup" className="text-button6">Sign up</Link> 
        <Link to="/Login" className="text-button5">Log in</Link>

      </div>
    </div>
  );
};

export default Navbar;
