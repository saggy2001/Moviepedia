import React from "react";
import "./NavBar.css";

const NavBar = ({ onInputChange }) => {
  return (
    <div className="nav-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search Movies here"
          className="search-input"
          onChange={onInputChange}
        />
        {/* <button className="search-btn">Search</button> */}
      </div>
    </div>
  );
};

export default NavBar;
