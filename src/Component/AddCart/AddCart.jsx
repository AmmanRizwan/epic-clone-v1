import React, { useContext } from "react";
import './AddCart.css';

import { BsChevronRight } from "react-icons/bs";
import { GameContext } from "../../Context/GameContext";

const AddCart = () => {
  const {data, cartItems, removeToCart} = useContext(GameContext);
  return (
    <div className="add-cart">
      <div className="title-cart">
          <h2>Add To Cart </h2>
          <BsChevronRight className="cart-arrow" />
      </div>

    <div className="cart-product">
      {data.map((e, index) => {
        if (cartItems[e.id] > 0)
        {
          return (
          <div className="cart-items" key={index}>
            <div className="cart-img">
              <img src={e.image} alt="" />
            </div>

            <div className="cart-name">
              {e.name}
            </div>

              <div className="cart-price" onClick={() => {removeToCart(e.id)}}>
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

export default AddCart;