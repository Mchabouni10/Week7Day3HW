import React from "react";

function SearchBar({ setSearchQuery }) {
  return (
    <div className="SearchBar">
      <input
        className="SearchInput"
        type="text"
        placeholder="Search for an employee"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
