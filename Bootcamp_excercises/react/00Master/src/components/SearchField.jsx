import React from "react";

const SearchField = ({ onChange, type, placeholder }) => {
  return (
    <div className="search-wrapper">
      <input
        className="search-input"
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default SearchField;
