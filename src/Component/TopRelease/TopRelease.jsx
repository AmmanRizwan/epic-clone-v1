import React, { useContext } from "react";
import './TopRelease.css';
import Item from "../Item/Item";
import { GameContext } from "../../Context/GameContext";
import { HiChevronUp } from "react-icons/hi2";

let TopRelease = () => {
  const {data} = useContext(GameContext);
  return (
    <div className="toprelease">
      <div className="release-text">
        <h2>Top New Releases</h2>
        <div className="left-right-icon">
          <div>
            <HiChevronUp className="left-arrow" />
          </div>
          <div>
            <HiChevronUp className="right-arrow" />
          </div>
        </div>
      </div>
      <div className="release-item">
      {
        data.map((game, index) => 
          {
            if (game.release === "new")
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

export default TopRelease;