import React from "react";
import './Offer.css';
import offer_image_1 from '../Assets/offer_1.avif';
import offer_image_2 from '../Assets/Offer_2.avif';


let Offer = () => {
  return (
    <div className="offer">
      <div>
        <img src={offer_image_1} alt="" />
      </div>
      <div>
        <img src={offer_image_2} alt="" />
      </div>
    </div>
  )
}

export default Offer;