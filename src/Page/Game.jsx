import React, { useContext } from "react";
import './CSS/Game.css';
import { GameContext } from "../Context/GameContext";
import { useParams } from "react-router-dom";
import GameDetail from "../Component/GameDetail/GameDetail";
import GameAbout from "../Component/GameAbout/GameAbout";


const Game = () => {
  const {data} = useContext(GameContext);
  const {gameId} = useParams();
  const game = data.find((e) => e.id === Number(gameId));

  return (
    <div className="game-detail-section">
      <GameAbout data={game}/>
      
      <div className='game-detail'>
      <GameDetail data={game}/>
      </div>

    </div>
  )
}

export default Game;