import React from "react";
import './GameImage.css';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const GameImage = (props) => {
  const {data} = props;
  return (
    <div className="gameimage">
        <div className="game-background">
          <div>
            <img src={data.bg} alt="" className="game-main-image" />
          </div>

        <div className="game-bg-small-image">
          <div className="left-icon">
            <HiChevronLeft className="left-icon-arrow" />
          </div>
          <img src={data.bg} alt="" />
          <img src={data.bg} alt="" />
          <img src={data.bg} alt="" />
          <img src={data.bg} alt="" />
          <img src={data.bg} alt="" />
          <div className="right-icon">
          <HiChevronRight className="right-icon-arrow" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameImage;