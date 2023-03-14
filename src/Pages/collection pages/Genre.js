import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import { useData } from "../../Store/DataProvider";
import GenreLayout from "./Genres/GenreLayout";
import "./Genre.css";
import { Link } from "react-router-dom";
const Genre = () => {
  const { genre } = useParams();
  const { games } = useData();
  const [gameData, setGameData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      let filtering = games.filter((game) =>
        game.genres.some((sub) => sub.name.toLowerCase() === genre)
      );

      return setGameData(filtering), setLoading(false);
    }, 1500);

    console.log(gameData);

    return clearTimeout();
  }, [genre]);

  return (
    <>
      <Link to="..">go back</Link>
      <div>
        <div>{loading && <LoadingSpinner />}</div>
        <div className="cards-container">
          {!loading &&
            gameData.map((game) => (
              <GenreLayout
                key={game.id}
                gameID={game.id}
                pic={game.background_image}
                GameName={game.name}
                platforms={game.platforms}
                esrb={game.esrb_rating.name}
                rating={game.rating}
                Released={game.released}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Genre;
