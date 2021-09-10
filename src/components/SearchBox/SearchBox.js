import React from "react";
import "./SearchBox.css";

const SearchBox = ({ onInputChange }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search Movies here"
        className="search-input"
        // whenever input value changes it will call onInputChange function to store the new input value
        onChange={onInputChange}
      />
    </div>
  );
};

export default SearchBox;
