import React from "react";
import { useSelector } from "react-redux";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {cartItems.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is Currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <BsArrowLeft />
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <CartItem />
      )}
    </div>
  );
};

export default Cart;
