import React from "react";
import { useSelector } from "react-redux";

import "./Checkout.css";
const Checkout = () => {
  const total = useSelector((state) => state.cart.itemsPrice);

  const buy = () => {
    console.log("ordering...");
  };

  return (
    <div className="checkout">
      <div className="checkoutpanel">
        <span>Total price: ${total}</span>
        <button onClick={buy}> Checkout</button>
      </div>
    </div>
  );
};

export default Checkout;
