import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import { useData } from "../../Store/DataProvider";
import GenreLayout from "./Genres/GenreLayout";
import "./Genre.css";
import { Link } from "react-router-dom";
import leftArrow from "../../Assets/leftArrow.png";
const Genre = () => {
  const location = useLocation();
  const { genre } = useParams();
  const { games } = useData();
  const { Data } = useData();
  const [gameData, setGameData] = useState([]);
  const [loading, setLoading] = useState(false);

  // games.filter((game) =>
  //   game.genres.some((sub) => sub.name.toLowerCase() === genre)
  // );

  let filtering = Data.map((data) =>
    data.filter((game) =>
      game.genres.some((sub) => sub.name.toLowerCase() === genre)
    )
  );
  useEffect(() => {
    setLoading(true);

    setGameData(filtering);
    setLoading(false);
  }, [location.pathname]);

  return (
    <>
      <Link to="..">
        <img src={leftArrow} className="go-backImg" alt="go-back" />
      </Link>
      <div>
        <div>{loading && <LoadingSpinner />}</div>
        <div className="cards-container">
          {!loading &&
            gameData.map((pages) =>
              pages.map((game) => (
                <GenreLayout
                  key={game.id}
                  gameID={game.id}
                  pic={game.background_image}
                  GameName={game.name}
                  platforms={game.platforms}
                  rating={game.rating}
                  Released={game.released}
                />
              ))
            )}
        </div>
      </div>
    </>
  );
};

export default Genre;
