import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../Store/Redux/store/ui-slice";
const CartButton = () => {
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div>
      <i
        className="fa-solid fa-cart-shopping"
        style={{ cursor: "pointer" }}
        onClick={toggleCartHandler}
      ></i>
      <span className="cart-badge">{cartQuantity}</span>
    </div>
  );
};

export default CartButton;
