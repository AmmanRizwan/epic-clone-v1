import React from "react";
import AddCart from "../Component/AddCart/AddCart";
import AddWishlist from "../Component/AddWishlist/AddWishlist";

const Profile = () => {
  return (
    <div className="profile">
      <AddCart />
      <AddWishlist />
    </div>
  )
}

export default Profile;