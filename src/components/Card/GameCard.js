import React from "react";
import "./GameCard.css";
import { NavLink } from "react-router-dom";
import Rating from "../UI/Rating";
import AddtoCart from "../Cart/AddtoCart";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/Redux/store/cart-slice";
const GameCard = (props) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        image: props.games.background_image,
        id: props.games.id,
        name: props.games.name,
        price: props.games.reviews_text_count,
      })
    );
  };

  return (
    <>
      <div className={`GameCard ${props.animateClass}`} key={props.games.id}>
        <div className="GameCard ">
          <NavLink to={`/game/${props.games.id}`}>
            <div className="gameImg">
              <img src={props.games.background_image} alt={props.games.name} />
            </div>
          </NavLink>
          <div className="GameCardDesc">
            <span>{props.games.name}</span>
            <br />
            <span>
              <Rating Rating={props.games.rating} />
            </span>
            <div className="price">
              <span>Price: ${props.games.reviews_text_count}</span>
              <AddtoCart title="Add to cart" onClick={addToCartHandler} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameCard;
