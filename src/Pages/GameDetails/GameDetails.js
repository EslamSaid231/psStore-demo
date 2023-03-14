import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useData } from "../../Store/DataProvider";
import "./GameDetails.css";
import leftArrow from "../../Assets/leftArrow.png";
import ScreenShots from "../../components/UI/ScreenShots";

const GameDetails = () => {
  const { gameId } = useParams();
  const { games } = useData();
  const indexing = games.findIndex((game) => game.id === +gameId);
  const [index, setIndex] = useState(indexing);
  const [currentImg, setCurrentImg] = useState();
  const goToNext = () => {
    setIndex(index + 1);
  };
  useEffect(() => {
    setCurrentImg(thisProduct.background_image);
  }, [index]);

  const thisProduct = games[index];
  console.log(index + 1);
  const genres = thisProduct.genres.map((genre) => (
    <Link to={`/games/${genre.name.toLowerCase()}`}>{genre.name}</Link>
  ));
  const platforms = thisProduct.platforms.map((plat) => plat.platform.name);
  const tags = thisProduct.tags.map((tag) => tag.name);
  const order = () => {
    console.log("...Ordering");
  };
  const thumbChange = (thumb) => {
    setCurrentImg(thumb);
  };

  const screenShots = thisProduct.short_screenshots;

  return (
    <>
      <div key={thisProduct.id}>
        <div className="detailsContainer">
          <img src={currentImg} alt={thisProduct.name} />
          <div className="NextBtn">
            <button onClick={goToNext}>
              <img src={leftArrow} alt="/" className="nextImg" />
            </button>
          </div>
          <div className="gameDetails">
            <div className="go-backLink">
              <Link to="..">
                <img src={leftArrow} className="go-backImg" alt="go-back" />
              </Link>
            </div>

            <div className="detailsText">
              <h1>{thisProduct.name}</h1>
              <span className="genres">Genres: {genres}</span>
              <br />
              <span>Available on: {platforms.join(" ")}</span>
              <span>Total Playtime: {thisProduct.playtime}</span>
              <span>
                Tags: <span>{tags.join(" ")}</span>
              </span>

              <span>Release in: {thisProduct.released}</span>
              <span>ESRB: {thisProduct.esrb_rating.name}</span>
              <button onClick={order} className="ordering">
                Order Now!
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="screenshotsContainer">
        {screenShots.map((shot) => (
          <ScreenShots
            key={shot.id}
            src={shot.image}
            thumb={thumbChange}
            id={shot.id}
          />
        ))}
      </div>
    </>
  );
};

export default GameDetails;
