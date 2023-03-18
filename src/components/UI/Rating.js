import React, { useState } from "react";
import "./Rating.css";
const Rating = (props) => {
  let rate = props.Rating;
  const [rating, setRating] = useState(rate);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= rating ? "on" : "off"}
            disabled={props.disabled}
          >
            <span className="Star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default Rating;
