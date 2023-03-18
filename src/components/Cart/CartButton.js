import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../Store/Redux/store/ui-slice";
const CartButton = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };
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
