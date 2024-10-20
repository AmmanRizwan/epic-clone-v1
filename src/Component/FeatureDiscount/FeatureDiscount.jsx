import React, { useContext } from "react";
import './FeatureDiscount.css';
import Item from "../Item/Item";
import { GameContext } from "../../Context/GameContext";
import { HiChevronUp } from "react-icons/hi2";

const FeatureDiscount = () => {
  const {data} = useContext(GameContext);
  return (
    <div className="feature-discount">
      <div className="featured-text">
          <h2>Featured Discounts</h2>
        <div className="left-right-icon">
          <div>
            <HiChevronUp className="left-arrow" />
          </div>
          <div>
            <HiChevronUp className="right-arrow" />
          </div>
        </div>
      </div>
      <div className="feature-item">
      {
        data.map((game, index) => {
          if (game.feature === 'discount')
          {
            return (
              <Item key={index} id={game.id} image={game.image} type={game.type} name={game.name} price={game.price} />
            )
          }
          else return null;
        })
      }
      </div>
    </div>
  )
}

export default FeatureDiscount;