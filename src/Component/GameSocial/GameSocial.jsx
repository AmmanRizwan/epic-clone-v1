import React from "react";
import './GameSocial.css';
import { FaFacebook } from "react-icons/fa6";
import { BsDiscord, BsInstagram, BsReddit, BsTwitter, BsYoutube } from "react-icons/bs";

const GameSocial = () => {
  return (
    <div className="social">
      <div className="social-title">
        <h1>Follow Us</h1>
      </div>

      <div className="social-icon">
        <BsDiscord className="discord" />
        <FaFacebook className="facebook" />
        <BsInstagram  className="instagram"/>
        <BsReddit className="reddit" />
        <BsTwitter className="twitter" />
        <BsYoutube className="youtube"/>
      </div>
    </div>
  )
}

export default GameSocial;