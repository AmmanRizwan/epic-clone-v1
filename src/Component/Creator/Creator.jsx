import React, { useContext } from "react";
import './Creator.css';
import Item from "../Item/Item";
import { GameContext } from "../../Context/GameContext";
import { HiChevronUp } from "react-icons/hi2";

let Creator = () => {
  const {data} = useContext(GameContext);
  return (
    <div className="creator">
      <div className="creator-text">
        <h2>Hispanic + Latin American Heritage Creator Spotlight</h2>
        <div className="left-right-icon">
          <div>
            <HiChevronUp className="left-arrow" />
          </div>
          <div>
            <HiChevronUp className="right-arrow" />
          </div>
        </div>
      </div>
      <div className="creator-item">
      {
        data.map((game, index) => {
          if (game.region === "American")
          return (
            <Item key={index} id={game.id} image={game.image} type={game.type} name={game.name} price={game.price} />
          )
          else return null;
        })
      }
      </div>
    </div>
  )
}

export default Creator;