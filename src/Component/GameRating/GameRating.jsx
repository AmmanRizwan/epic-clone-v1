import React from "react";
import './GameRating.css';
import { HiStar } from "react-icons/hi";
import { HiOutlineStar } from "react-icons/hi2";
const GameRating = () => {
  return (
    <div>
      <div className="player-rating">
        <h3>Epic Player Ratings</h3>
        <p>Capture from players in the Epic Games ecosystem.</p>
      </div>

      <div className="rating-by-player">
        3.9 <HiStar className="star" /><HiStar className="star" /><HiStar className="star" /><HiStar className="star" /><HiOutlineStar className="star" />
      </div>
    </div>
  )
}

export default GameRating;