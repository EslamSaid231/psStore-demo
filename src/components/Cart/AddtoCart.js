import React from "react";
import "./Cart.css";
const AddtoCart = (props) => {
  return (
    <>
      <button className="addtocartBtn" onClick={props.onClick}>
        {props.title}{" "}
      </button>
    </>
  );
};

export default AddtoCart;
