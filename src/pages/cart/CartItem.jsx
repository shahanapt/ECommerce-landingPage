import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.scss";
import {
  removeFromCart,
  addToCart,
  getTotals,
  decrementCart,
} from "../../features/cartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);
  console.log(cartTotalAmount);

  const TotalQuantity = useSelector((state) => state.cart.cartTotalQuantity);
  console.log(TotalQuantity);

  const dispatch = useDispatch();

  // remove from cart onclick function
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  // decrement cart item quantity onclick function
  const handleDecrementFromCart = (cartItem) => {
    dispatch(decrementCart(cartItem));
  };

  // increment cart item quantity cart onclick function
  const handleIncrementFromCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  return (
    <div>
      <div className="titles">
        <h3>Your Cart Items</h3>
      </div>
      <div className="cart-main">
        {cartItems.cartItems?.map((cartItem) => (
          <div className="cart-card" key={cartItem.id}>
            <div className="cart-item d-flex">
              <div style={{ alignSelf: "center" }}>
                <img src={cartItem.imgSrc} alt={cartItem.title} />
              </div>
              <div>
                <div>
                  <h4>{cartItem.title}</h4>
                  <p>{cartItem.description}</p>
                </div>
                <div className="cart-product-price">${cartItem.price}</div>
                {/* Quantity increment and decrement function */}
                <div className="cart-product-quantity d-flex">
                  <button onClick={() => handleDecrementFromCart(cartItem)}>
                    -
                  </button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button onClick={() => handleIncrementFromCart(cartItem)}>
                    +
                  </button>
                </div>
                {/*  */}
                <button
                  className="btn-remove"
                  onClick={() => handleRemoveFromCart(cartItem)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-product-total-price">
        <p>Subtotal: ${cartTotalAmount}</p>
        <p>Total Quantity: {TotalQuantity}</p>
        <Link to={"/"}>
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default CartItem;
