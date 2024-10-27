import React, { useContext } from "react";
import './GameAbout.css';
import { HiStar } from "react-icons/hi";
import { HiOutlineStar } from "react-icons/hi2";
import GameImage from "../GameImage/GameImage";
import GameSysReq from "../GameSysReq/GameSysReq";
import GameRating from "../GameRating/GameRating";
import GameSocial from "../GameSocial/GameSocial";
import { GameContext } from "../../Context/GameContext";

const GameAbout = (props) => {
  const {data} = props;
  const {addToCart, addToWish} = useContext(GameContext);
  return (
    <div className="game-about">

      <div className="game-image-detail">
        <div>
      <div className="game-title">
        {data.name}
      </div>

      <div className="game-rating">
        <div>
        <HiStar /><HiStar /><HiStar /><HiStar /><HiOutlineStar />
        </div>
        3.9
      </div>

      <div className="overview-side">
        <div className="overview-title">
          <h5>Overview</h5>
          <hr className="overview-line" />
        </div>

        <div className="faq-title">
          FAQ
        </div>
      </div>

          <GameImage data={data} />
 
          <div className="buyingbutton">
            <button className={data.price === "Free" ?"free-button":"purchase-button"} >{data.price === "Free" ? "Get" : "Buy Now"}</button>
            <button onClick={() => {addToCart(data.id)}}>Add To Cart</button>
            <button onClick={() => {addToWish(data.id)}}>Add To Wishlist</button>
          </div>
{/*
          <div className="description-game-type">
      <div className="game-para-info">
      Embark on a journey acroos Teyvat to find your lost sibling and seek answers from The Seven - the gods of each element. Explore this wondrous world, join forces with a diverse range of characters, and unravel the countless mysteries that Teyvat holds...
      </div>

      <div className="type-overview-section">
        <div className="type-genres">
          <div className="genre-title">
            Genre
          </div>

          <div className="buttons-genre">
          <button>Action</button>
          <button>Narration</button>
          <button>Shooter</button>
          </div>
        </div>


        <div className="type-features">
        <div className="line-type-genres">
          <hr />
        </div>

        <div className="feature-grp">
          <div className="feature-title">
            Features
          </div>
          <div className="feature-button">
          <button>Co-op</button>
          <button>Competitive</button>
          <button>Controller Support</button>
          <button>Online Multiplayer</button>
          </div>
        </div>

        </div>
      </div>

      <GameSocial />

      <GameRating />

      <GameSysReq data={data} />

          </div> */}
        </div>

      </div>

    </div>
  )
}

export default GameAbout;