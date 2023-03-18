import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartLayout from "./CartLayout";
import ReactDOM from "react-dom";
import "./Cart.css";

import { uiActions } from "../../Store/Redux/store/ui-slice";
import Checkout from "./Checkout";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const closeHandler = () => {
    dispatch(uiActions.toggle());
  };
  const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.onClose}></div>;
  };
  const portalElement = document.getElementById("overlay");
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={closeHandler} />,
        portalElement
      )}
      <div className="cartLayout">
        <div className="cartwrapper">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartLayout
                key={item.id}
                items={{
                  id: item.id,
                  image: item.image,
                  name: item.name,
                  price: item.price,
                  totalPrice: item.totalPrice,
                  quantity: item.quantity,
                }}
              />
            ))
          ) : (
            <p className="emptycart">Cart is empty</p>
          )}
          <Checkout />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;
