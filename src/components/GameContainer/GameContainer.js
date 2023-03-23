import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useData } from "../../Store/DataProvider";
import GameCard from "../Card/GameCard";
import "./GameContainer.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//right-arrow settings
const SmapleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn-next">
      <button onClick={onClick} className="next">
        <i className="fa fa-chevron-right"></i>
      </button>
    </div>
  );
};
//left-arrow settings
const SmaplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn-prev">
      <button onClick={onClick} className="prev">
        <i className="fa fa-chevron-left"></i>
      </button>
    </div>
  );
};

const GameContainer = () => {
  const [slidingClass, setSlidingClass] = useState("");
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SmapleNextArrow />,
    prevArrow: <SmaplePrevArrow />,
  };
  //Slider settings

  useEffect(() => {
    window.addEventListener("scroll", slidingAnimate);
    return () => {
      window.removeEventListener("scroll", slidingAnimate);
    };
  });
  const slidingAnimate = () => {
    if (window) {
      let windowHeight = window.scrollY;
      if (windowHeight > 550) {
        setSlidingClass("animating");
      } else {
        setSlidingClass("");
      }
    }
  };

  const { games } = useData();

  return (
    <div className="GameContainer">
      <p>Check out latest games</p>
      <Slider {...settings}>
        {games.map((game) => (
          <GameCard key={game.id} games={game} animateClass={slidingClass} />
        ))}
      </Slider>
    </div>
  );
};

export default GameContainer;
