import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useData } from "../../Store/DataProvider";
import { cartActions } from "../../Store/Redux/store/cart-slice";
import AddtoCart from "../Cart/AddtoCart";
import Rating from "../UI/Rating";
import "./SearchResults.css";
const SearchResults = (props) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        image: props.games.background_image,
        id: props.games.id,
        name: props.games.name,
        price: props.games.price,
      })
    );
  };
  return (
    <div className="results-card">
      {" "}
      <div className="GameCard" key={props.games.id}>
        {/*  */}
        <div>
          <NavLink to={`/game/${props.games.id}`}>
            <div className="gameImg" onClick={() => props.onClose(false)}>
              <img src={props.games.background_image} alt={props.games.name} />
            </div>
          </NavLink>
          <div className="GameCardDesc">
            <span className="Gametitle">{props.games.name}</span>
            <br />

            <div className="price">
              <span>Price: ${props.games.price}</span>
              <AddtoCart title="Add to cart" onClick={addToCartHandler} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
