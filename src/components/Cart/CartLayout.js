import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/Redux/store/cart-slice";
import "./Cart.css";

const CartLayout = (props) => {
  const dispatch = useDispatch();

  const { id, image, name, totalPrice, price, quantity } = props.items;
  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart({ id, price }));
  };

  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart({ id, image, name, totalPrice, price }));
  };
  return (
    <div className="cartContainer">
      <div className="cart-itemwrapper">
        <div>
          <img src={image} alt="/" />
        </div>
        <div className="summary">
          <div className="desc">
            <h5>{name}</h5>${totalPrice.toFixed(2)}
            <span>(${price.toFixed(2)}/item)</span>
          </div>

          <span>x{quantity}</span>
        </div>
        <div className="cartBtns">
          {" "}
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartLayout;
