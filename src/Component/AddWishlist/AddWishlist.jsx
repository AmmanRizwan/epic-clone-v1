import React, { useContext } from "react";
import './AddWishlist.css';

import { BsChevronRight } from "react-icons/bs";
import { GameContext } from "../../Context/GameContext";

const AddWishlist = () => {
  const {data, wishItems, removeToWish} = useContext(GameContext); 
  return (
    <div className="add-cart">
      <div className="title-wish">
          <h2>Add To Wishlist </h2>
          <BsChevronRight className="wish-arrow" />
      </div>

    <div className="wish-product">
      {data.map((e, index) => {
        if (wishItems[e.id] > 0)
        {
          return (
          <div className="wish-items" key={index}>
            <div className="wish-img">
              <img src={e.image} alt="" />
            </div>

            <div className="wish-name">
              {e.name}
            </div>

              <div className="wish-price" onClick={() => {removeToWish(e.id)}}>
                Remove
              </div>
          </div>

          )
        }
      })}
      </div>
    </div>
  )
}

export default AddWishlist;