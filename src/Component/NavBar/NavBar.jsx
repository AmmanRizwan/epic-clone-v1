// import component and library
import React, { useState } from "react";
import './NavBar.css'
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";


// import logo and images
import store_logo from '../Assets/store_logo.png';
import { SiEpicgames } from "react-icons/si";
import { CgClose, CgMenuCheese, CgProfile } from "react-icons/cg";


const NavBar = () => {
  const [close, setClose] = useState(false);
  return (
    <>
      <div className={close === true ? "not-visible" : "mobile-nav"}>

      <div className="mobile-close-icon">
        <CgClose className="close-btn" onClick={() => setClose(true)} />
      </div>

      <div className="title-logo">
        <SiEpicgames className="title"/>
      </div>

      <div className="options">
        <Link to='/profile' style={{textDecoration: "none", color: "white"}}><div>Profile</div></Link>
        <div>Support</div>
        <div>Distribute</div>
        <div>Download</div>
      </div>

    </div>

    <div className="nav-bar">
      <div className="nav-bar-left">
        <SiEpicgames className="epic-logo" />
        <img src={store_logo} alt="Store" className="store-logo"/>
        <p className="epic-support">Support</p>
        <p className="epic-distribute">Distribute
        </p>
      </div>

      <div className="nav-bar-right">
       <Link to='/profile'><CgProfile className="expore-logo" /></Link> 
        <Link to='/login'><button className="signin-btn">Sign in</button></Link>        
        <button className="download-btn">Download</button>
      </div>

      <div className="mobile">
        <CgMenuCheese className="nav-menu" onClick={() => setClose(false)} />
      </div>

    </div>
      <SearchBar />
    </>
  )
}

export default NavBar;