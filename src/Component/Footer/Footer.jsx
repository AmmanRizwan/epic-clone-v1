// import library and component
import React from "react";
import './Footer.css';

// import image and logo
import { SiEpicgames, SiUnrealengine } from "react-icons/si";
import { BiChevronUp } from "react-icons/bi";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="footer">

      
      <div className="social-link">
      <div className="social-logo">
        <FaFacebook className="facebook-logo-footer" />
        <BsTwitter className="twitter-logo-footer" />
        <BsYoutube className="youtube-logo-footer" />
      </div>

      <div>
        <BiChevronUp className="top-section" onClick={() => {window.scrollTo(0, 0)}} />
      </div>
      </div>

      <div className="resources">
        <div className="res-heading">Resources</div>
        <div className="res-link">
          <p>Support A Creator</p>
          <p>Fan Art Policy</p>
          <p>Online Services</p>
          <p>Distribute on Epic Games</p>
          <p>UX Research</p>
          <p>Community Rules</p>
          <p>Careers</p>
          <p>Store EULA</p>
          <p>Epic Newsroom</p>
          <p>Company</p>
        </div>
      </div>
      
      <div className="madeby">
        <div className="madeby-heading">Made By Epic Games</div>
        <div className="madeby-link">
          <p>Battle Breakers</p>
          <p>Robo Recall</p>
          <p>Fortnite</p>
          <p>Shadow Complex</p>
          <p>Infinity Blade</p>
          <p>Unreal Tournament</p>
        </div>
      </div>
      <hr />

        <div className="footer-para">&copy; 2024, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite, the Fortnite logo, Unreal,Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners. Our websites may contain links to other sites and resources provided by third parties. These links are provided for your conveninence only. Epic Games has no control over the contents of sites or resources, and accepts no responsiblity for them or for any loss or damage that may arise from your use of them.
        </div>

        <div className="footer-term">
          <div className="term">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Store Refund Policy</p>
          </div>

          <div className="epic-unreal">
          <SiEpicgames className="epic-logo-footer" />
          <SiUnrealengine className="unreal-engine" />
          </div>
        </div>
    </div>
  )
}

export default Footer;