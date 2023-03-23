import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import { useData } from "../../Store/DataProvider";
import GenreLayout from "./Genres/GenreLayout";
import "./Genre.css";
import { Link } from "react-router-dom";
import leftArrow from "../../Assets/leftArrow.png";
import Pagination from "../../components/UI/Pagination";
const Genre = () => {
  const location = useLocation();
  const { genre } = useParams();

  const { Data } = useData();
  const [loading, setLoading] = useState(true);
  const [gameData, setGameData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(20);
  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const [filteredGames, setFilteredGames] = useState([]);
  useEffect(() => {
    const fetchingData = async () => {
      let filtering = await Data.map((data) =>
        data.filter((game) =>
          game.genres.some((sub) => sub.name.toLowerCase() === genre)
        )
      );
      const results = await filtering.flatMap((games) => games);
      setFilteredGames(results);
      setGameData(currentCards);
      setLoading(false);
    };
    fetchingData();
  }, [currentPage, Data, genre]);
  const currentCards = filteredGames.slice(firstCardIndex, lastCardIndex);

  return (
    <>
      {!loading ? (
        <>
          <Link to="..">
            <img src={leftArrow} className="go-backImg" alt="go-back" />
          </Link>
          <div>
            <div>{loading && <LoadingSpinner />}</div>
            <div className="cards-container">
              {!loading &&
                currentCards.map((game) => (
                  <GenreLayout
                    key={game.id}
                    gameID={game.id}
                    pic={game.background_image}
                    GameName={game.name}
                    platforms={game.platforms}
                    rating={game.rating}
                    Released={game.released}
                  />
                ))}
              <Pagination
                totalResults={filteredGames.length}
                cardsPerPage={cardsPerPage}
                changePage={setCurrentPage}
                currentPage={currentPage}
              />
            </div>
          </div>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default Genre;
