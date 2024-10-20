import React, { useContext } from "react";
import './HotDeal.css';
import { GameContext } from "../../Context/GameContext";

const HotDeal = () => {
  const {data} =useContext(GameContext);
  return (
    <>
    <div className="hot-deal">
    {data.map((data, index) => {
      if (data.discount && data.new_price && data.old_price && data.section === "offer")
      {
        return (
          <div className="hot-deal-box" key={index}>
            <img className="hot-deal-img" src={data.image} alt="" />
            <h2 className="hot-deal-name">{data.name}</h2>

            <div className="hot-deal-price-discount">
              <p className="hot-deal-discount">{data.discount}%</p>
              <p className="hot-deal-old-price">{data.old_price}</p>
              <p className="hot-deal-new-price">{data.new_price}</p>
            </div>
          </div>

      )
      }
      else if (data.section === "offer")
      {
        return (
          <div className="hot-deal-box"  key={index}>
            <img className="hot-deal-img" src={data.image} alt="" />
            <h2 className="hot-deal-name">{data.name}</h2>

            <div className="hot-deal-button">
              <button>Browse</button>
            </div>
          </div>
        )
      }
      else return null;
    })}
    </div>
    </>
  )
}

export default HotDeal;