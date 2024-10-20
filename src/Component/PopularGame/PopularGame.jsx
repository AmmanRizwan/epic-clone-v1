import React, { useContext } from "react";
import './PopularGame.css';
import Item from "../Item/Item";
import { GameContext } from "../../Context/GameContext";
import { HiChevronUp } from "react-icons/hi2";
import { HiMagnifyingGlass } from "react-icons/hi2";

let filter = [
  {
    name: "Events",
    icon: <HiChevronUp/>,
  },
  {
    name: "Price",
    icon: <HiChevronUp/>,
  },
  {
    name: "Genre",
    icon: <HiChevronUp/>,
  },
  {
    name: "Features",
    icon: <HiChevronUp/>,
  },
  {
    name: "Types",
    icon: <HiChevronUp/>,
  },
  {
    name: "Platform",
    icon: <HiChevronUp/>,
  },
]

const PopularGame = () => {
  const {data} = useContext(GameContext);

  return (
    <div className="popular-game">
      <div className="game-list">
        {data.map((game, index) => {
          if (game.type === 'Base Game')
          {
            return (
              <Item key={index} id={game.id} image={game.image} name={game.name} price={game.price} type={game.type} />
            )
          }
          else
          return null;
          
        })}
      </div>

      <div className="filter">
        <div className="filter-option">
          <h5>{"Filters (1)"}</h5>
          <p>reset</p>
        </div>

        <div className="keyword-input">
        <input type="text" placeholder="Keywords" className="filter-input" />
        
        <div className="magnify">
        <HiMagnifyingGlass className="magnify-style" />

        </div>
        </div>

        {filter.map((item, index) => {
          return (
          <div className="filter-selection" key={index}>
            <div>
              <hr className="filter-line" />
            </div>

            <div className="option">
            <h6>{item.name}</h6>
            <p>{item.icon}</p>
            </div>
          </div>

          )
        })}


      </div>

    </div>
  )
}

export default PopularGame;