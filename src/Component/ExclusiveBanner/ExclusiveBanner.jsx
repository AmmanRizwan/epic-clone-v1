import React, { useContext, useEffect, useState } from "react";
import './ExclusiveBanner.css';
import { GameContext } from "../../Context/GameContext";
import { Link } from "react-router-dom";

const ExclusiveBanner = () => {
  const {data, addToWish} = useContext(GameContext);
  let [banner, setBanner] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      if (banner === 6)
      {
        setBanner(banner=0);
      }
      setBanner(banner + 1);
    }, 2500);

    return () => {
      clearInterval(timer);
    }
  })

  return (
    <div className="exclusive_banner">
       {data.map((game, index) => {
        if (game.id === banner && game.section === 'exclusive') //section: "exclusive"
        {
          return ( 
          <div className="exclusive-main-banner" key={index}>
            <Link to={`/game/${game.id}`}><img src={game.poster} alt="" /></Link> 
  
            <div className="exclusive-main-banner-detail" id={game.id} >
              <img className="game-icon" src={game.icon} alt="" />
              <h3 className="game-ava">{game.ava}</h3>
              <p className="game-des">{game.des}</p>
              <p className="game-price">{game.price === "Free" ? <></> : <>&#8377;</>}{game.price}</p>
            <button className="buy-btn">Buy Now</button>
            <button className="add-wish" onClick={() => {addToWish(game.id); alert(`${game.name} is Added into Wishlist.`)}} >+ Add to Wishlist</button>
          </div>
          </div>
          )
        }
        else
        {
          return null;
        }
       })}

      <div className="exclusive-side-banner">
        {data.map((game, index) => {
          if (game.section === 'exclusive')
          {
            return (
         <div onClick={() => {setBanner(game.id)}} className={game.id === banner ? "side-banner-game-sel" : "side-banner-game" } key={index} id={game.id}>
           <img className="game_image" src={game.image} alt="" />
            <p className="game_name">{game.name}</p>
          </div>
            )  
          }
          else return null;
        })}
      </div>

      <div className="banner-indicator">
        {data.map((game, index) => {
          if (game.section === 'exclusive')
          {
            return (
        <div key={index} className={game.id === banner ? "banner-point" : "banner-point-none"} onClick={() => {setBanner(game.id)}}>
        </div>
            )
          }
        })}

      </div>
    </div>
  )
}

export default ExclusiveBanner;