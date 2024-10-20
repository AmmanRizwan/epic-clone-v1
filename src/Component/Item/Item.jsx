import React from "react";
import './Item.css';
import { Link } from "react-router-dom";

const Item = (game) => {
  return (
    <div className="item">
     <Link to={`/game/${game.id}`}><img onClick={() => {window.scrollTo(0, 0)}} className="base_game_image" src={game.image} alt="" /></Link> 
      <p className="game_type">{game.type}</p>
      <h3 className="name">{game.name}</h3>
      <p className="price">{game.price === "Free" ? <></> : <>&#8377;</>}{game.price}</p>
    </div>
  )
}

export default Item;