import React from "react";

import './styles.css';


// Search bar for browsing videos
// ---

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input placeholder="Search" />
      <div className="search-bar-icon"><i className="fa-light fa-search"></i></div>
    </div>
  )
}

export default SearchBar;