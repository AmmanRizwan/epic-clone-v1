import React, { useContext } from "react";
import './GameDetail.css';
import userInteraction from '../Assets/userinteraction.png';
import { PiWindowsLogoFill } from "react-icons/pi";
import { GrShareOption } from "react-icons/gr";
import { MdReport } from "react-icons/md";
import { GameContext } from "../../Context/GameContext";

const GameDetail = (props) => {
  const {data} = props;
  const {addToCart, addToWish} = useContext(GameContext);
  return (
    <div className="game-detail">
    <div className="right-side-section">
      <div className="right-side-icon">
        <img src={data.icon} alt="" />
      </div>

      <div className="interact">
        <div className="interact-left">
          <img src={userInteraction} alt="" />
        </div>

        <div className="interact-right">
          <h6>16+</h6>
          <h5>Drugs, Extreme Voilence, Strong Language</h5>
          <hr />
          <p>Users Interact, In-Game Purchase</p>
        </div>
      </div>

      <div className="game-tag">
        <button>{data.type}</button>
        <button>Early Access</button>
        <button>Blockchain/NFT</button>
      </div>

      <div className="game-purchase-type">
        {data.price === "Free" ? <></> : <>&#8377;</>}{data.price}
      </div>

      <div className="game-declare">
        May include in-app purchases
      </div>

      <div className="purchase-button-type">
        <button className={data.price === "Free" ? "game-purchase-button-style" : "game-purchase-button"}>{data.price === "Free" ? "Get" : "Buy Now"}</button>
        <button className="game-add-to-cart" onClick={() => {addToCart(data.id)}}>Add To Cart</button>
        <button className="game-add-to-wishlist" onClick={() => {addToWish(data.id)}}>Add To Wishlist</button>
      </div>

      <div className="publish-platform">
        <div className="dev">
          <div className="dev-item">
          <div>Developer</div>
          <div>Gunzilla Games</div>
          </div>
          <hr />
        </div>

        <div className="dev">
          <div className="dev-item">
          <div>Publisher</div>
          <div>Gunzilla Games</div>
          </div>
          <hr />
        </div>

        <div className="dev">
          <div className="dev-item">
          <div>Release Date</div>
          <div>10/08/24</div>
          </div>
          <hr />
        </div>

        <div className="dev">
          <div className="dev-item">
          <div>Initial Release</div>
          <div>10/08/24</div>
          </div>
          <hr />
        </div>

        <div className="dev">
          <div className="dev-item">
          <div>Platform</div>
          <div><PiWindowsLogoFill className="window-logo"/></div>
          </div>
          <hr />
        </div>
      </div>
    <div className="share-report-button">
      <button><GrShareOption /> Share</button>
      <button><MdReport /> Report</button>
    </div>
    </div>

    </div>
  )
}

export default GameDetail;