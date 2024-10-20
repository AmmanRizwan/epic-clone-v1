import React, { useContext } from "react";
import './ExclusiveOffer.css';
import { GameContext } from "../../Context/GameContext";

let ExclusiveOffer = () => {
  const {data} = useContext(GameContext);
  return (
    <div className="exclusive-offer">
    {data.map((game, index) => {
      if (game.section === 'sale')
      {
        return (
          <div className="ex-offer" key={index}>
            <div className="exclusive-offer-img">
              <img src={game.image} alt="" />
            </div>
      
            <div className="exclusive-offer-para">
              <h2>{game.name}</h2>
              <p>{game.desc}</p>
              <button>{game.button}</button>
            </div>
          </div>
        )
      }
      else return null;
    })}
    </div>

  )
}

export default ExclusiveOffer;