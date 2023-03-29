import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useData } from "../../Store/DataProvider";
import "./GameDetails.css";
import leftArrow from "../../Assets/leftArrow.png";
import ScreenShots from "../../components/UI/ScreenShots";
import Slider from "../../components/UI/imgSlider/Slider";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/Redux/store/cart-slice";

const GameDetails = () => {
  const dispatch = useDispatch();
  const { gameId } = useParams();
  const { Data } = useData();
  const filtering = Data.flatMap((gamePages) =>
    gamePages.filter((gamePage) => gamePage.id === +gameId)
  );
  const game = filtering[0];
  const [currentImg, setCurrentImg] = useState();

  useEffect(() => {
    setCurrentImg(game.background_image);
  }, [gameId, game.background_image]);

  const genres = game.genres.map((genre) => (
    <Link to={`/games/${genre.name.toLowerCase()}`}>{genre.name}</Link>
  ));

  const platforms = game.platforms.map((plat) => plat.platform.name).join(" ");

  const tags = game.tags.map((tag) => tag.name).join(" ");

  const addToCartHandler = () => {
    console.log("...Ordering");
    dispatch(
      cartActions.addItemToCart({
        id: game.id,
        image: game.background_image,
        name: game.name,
        price: game.reviews_text_count,
      })
    );
  };
  const thumbChange = (thumb) => {
    setCurrentImg(thumb);
  };

  const screenShots = filtering.map((game) => game.short_screenshots);

  return (
    <>
      <div key={game.id}>
        <div className="detailsContainer">
          <img src={currentImg} alt={filtering.map((game) => game.name)} />

          <div className="gameDetails">
            <div className="go-backLink">
              <Link to="/games">
                <img src={leftArrow} className="go-backImg" alt="go-back" />
              </Link>
            </div>

            <div className="detailsText">
              <h1>{game.name}</h1>
              <span className="genres">Genres: {genres}</span>
              <br />
              <span>Available on: {platforms} </span>
              <span>Total Playtime: {game.playtime}</span>
              <span>
                Tags: <span>{tags}</span>
              </span>

              <span>Release in: {game.released}</span>

              <button onClick={addToCartHandler} className="ordering">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="screenshotsContainer">
        <Slider>
          {screenShots.map((screen) =>
            screen.map((shot, ind) => {
              ind += 1;
              return (
                <div>
                  <ScreenShots
                    key={shot.id}
                    src={shot.image}
                    thumb={thumbChange}
                    id={shot.id}
                    curr={currentImg}
                  />
                </div>
              );
            })
          )}
        </Slider>
      </div>
    </>
  );
};

export default GameDetails;
