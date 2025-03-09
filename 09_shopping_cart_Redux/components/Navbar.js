import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import WishlistIcon from "../assets/wishlist-icon.svg";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cartItems);
  console.log(cartItems);

  const wishlistItems = useSelector((state) => state.wishlistItems);
  console.log(wishlistItems);

  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">DigiShop</Link>
        </h1>
        <div className="navicons">
          <Link className="wishlist-icon" to="/wishlist">
            <img src={WishlistIcon} alt="wishlist-icon" />
            <div className="wishlist-items-count">
              {/* {wishlistItems.reduce((acc, curr) => acc + curr.quantity, 0)} */}
            </div>
          </Link>
          <Link className="cart-icon" to="/cart">
            <img src={CartIcon} alt="cart-icon" />
            <div className="cart-items-count">
              {cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
