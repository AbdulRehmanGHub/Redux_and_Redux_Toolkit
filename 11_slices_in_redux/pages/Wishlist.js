import React from "react";
import WishlistItem from "../components/WishlistItem";
import { useSelector } from "../react-redux";

export default function Wishlist() {
  const wishlistItems = useSelector((state) => state.cartItems);

  return (
    <div className="cart-container">
      <h2>Items in Your Wishlist</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="total">Action</div>
        </div>
        {wishlistItems.map(
          ({ productId, title, rating, price, imageUrl, quantity }) => (
            <WishlistItem
              key={productId}
              productId={productId}
              title={title}
              price={price}
              quantity={quantity}
              imageUrl={imageUrl}
              rating={rating}
            />
          )
        )}
        <div className="cart-header cart-item-container">{wishlistItems.title}</div>
      </div>
    </div>
  );
}
