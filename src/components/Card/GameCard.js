import React from "react";
import "./GameCard.css";
import { NavLink } from "react-router-dom";
import Rating from "../UI/Rating";
const GameCard = (props) => {
  return (
    <>
      <div className="GameCard" key={props.games.id}>
        <NavLink to={`/game/${props.games.id}`}>
          <div>
            <div className="gameImg">
              <img src={props.games.background_image} alt={props.games.name} />
            </div>
            <div className="GameCardDesc">
              <span>{props.games.name}</span>
              <br />
              <span>
                <Rating Rating={props.games.rating} />
              </span>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default GameCard;
