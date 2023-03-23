import React, { useEffect, useState } from "react";
import "./Games.css";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import { useData } from "../../Store/DataProvider";
import { Link } from "react-router-dom";
import leftArrow from "../../Assets/leftArrow.png";
import GamesLayout from "./GamesLayout";
import PaginationButtons from "./PaginationButtons";
const Games = () => {
  const { games } = useData();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setLoading(false);
  }, [games]);

  return (
    <>
      <Link to="..">
        <img src={leftArrow} className="go-backImg" alt="go-back" />
      </Link>
      <div>
        <div>{loading && <LoadingSpinner />}</div>
        <div className="cards-container">
          {!loading &&
            games.map((game) => (
              <GamesLayout
                key={game.id}
                gameID={game.id}
                pic={game.background_image}
                GameName={game.name}
                platforms={game.platforms}
                rating={game.rating}
                Released={game.released}
              />
            ))}
        </div>
        <PaginationButtons />
      </div>
    </>
  );
};

export default Games;

// <button onClick={() => setPageState("1")}>1</button>
// <button onClick={() => setPageState("2")}>2</button>
// <button onClick={() => setPageState("3")}>3</button>
// <button onClick={() => setPageState("4")}>4</button>
// <button onClick={() => setPageState("5")}>5</button>
// <button onClick={() => setPageState("6")}>6</button>
// <button onClick={() => setPageState("7")}>7</button>
