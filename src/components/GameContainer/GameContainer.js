import React from "react";
import Slider from "react-slick";
import { useData } from "../../Store/DataProvider";
import GameCard from "../Card/GameCard";
import "./GameContainer.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SmapleNextArrow />,
    prevArrow: <SmaplePrevArrow />,
  }; //Slider settings
  const { games } = useData();

  return (
    <div className="GameContainer">
      <p>Check out latest games</p>
      <Slider {...settings}>
        {games.map((game) => (
          <GameCard key={game.id} games={game} />
        ))}
      </Slider>
    </div>
  );
};

export default GameContainer;
