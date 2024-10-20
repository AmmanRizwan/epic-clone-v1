import React, { createContext, useState } from "react";
import data from '../Component/Assets/data'

export const GameContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < data.length + 1; i++)
  {
    cart[i] = 0;
  }
  return cart;
}

const getDefaultWish = () => {
  let wishlist = {};
  for (let i = 1; i< data.length + 1; i++)
  {
    wishlist[i] = 0;
  }
  return wishlist;
}

const GameContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [wishItems, setWishItems] = useState(getDefaultWish());
  
  
  // Cart Function
  const addToCart = (gameId) => {
    setCartItems((prev) => ({...prev, [gameId]:prev[gameId] = 1}));
    // console.log(cartItems);
  }

  const removeToCart = (gameId) => {
    setCartItems((prev) => ({...prev, [gameId]:prev[gameId] = 0}));
  }

  // WishList Function
  const addToWish = (gameId) => {
    setWishItems((prev) => ({...prev, [gameId]:prev[gameId] = 1} ));
  }
  const removeToWish = (gameId) => {
    setWishItems((prev) => ({...prev, [gameId]:prev[gameId] = 0} ));
  }
  

  
  const contextValue = {data, cartItems, addToCart, removeToCart, wishItems, addToWish, removeToWish};

  return (
    <GameContext.Provider value={contextValue}>
      {props.children}
    </GameContext.Provider>
  )

}

export default GameContextProvider;