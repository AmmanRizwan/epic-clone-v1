import React, { useState } from "react";
import './SearchBar.css';
import { Link } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchBar = () => {
  const [menu, setMenu] = useState('discover');

  return (
    <div className="search-bar">
      <div className="search-bar-input-div">
        <input type="text" className="search-bar-input" placeholder="Search store" />
      <div className="magnify">
        <HiMagnifyingGlass className="magnify-glass" />
      </div>

      </div>

      <Link style={{ textDecoration: "none"}} to='/'>
        <p onClick={() => setMenu('discover')}  className={menu === "discover" ? "discover-site": "search-nav-bar-non-active"}>Discover</p>
      </Link>
      
      <Link style={{ textDecoration: "none"}} to='/browse'>
        <p onClick={() => setMenu('browse')} className={menu === "browse" ? "browse-site": "search-nav-bar-non-active"}>Browse</p>
      </Link>
      
      <Link style={{ textDecoration: "none"}} to='/news'>
        <p onClick={() => setMenu('news')} className={menu === "news" ? "news-site" : "search-nav-bar-non-active"}>News</p>
      </Link>
    </div>
  )
}

export default SearchBar;