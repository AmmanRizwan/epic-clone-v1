import React, { useContext } from "react";
import './DiscoverNow.css';
import Item from "../Item/Item.jsx";
import { GameContext } from "../../Context/GameContext.jsx";
import { HiChevronUp } from "react-icons/hi2";

const DiscoverNow = () => {
  const {data} = useContext(GameContext);
  return (
    <div className="discover-now">
      <div className="discover-text">
        <h2>Discover Something New</h2>
        <div className="left-right-icon">
          <div>
            <HiChevronUp className="left-arrow" />
          </div>
          <div>
            <HiChevronUp className="right-arrow" />
          </div>
        </div>
      </div>
      <div className="discover-item">
      {
        data.map((game, index) => {
        if (game.discover === "new")
        {
          return (
            <Item key={index} id={game.id} image={game.image} type={game.type} name={game.name} price={game.price} />
          )
        }
        else
        return null;
        })
      }
      </div>
    </div>
  )
}

export default DiscoverNow;