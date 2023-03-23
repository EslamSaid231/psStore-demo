import React, { useEffect, useState } from "react";
import Pagination from "../UI/Pagination";

import { useData } from "../../Store/DataProvider";
import "./Search.css";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import SearchPage from "./SearchPage";
const Search = (props) => {
  const [query, setQuery] = useState("");
  const { Data } = useData();
  const [searchGames, setSearchGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(5);
  const lastPostIndex = currentPage * cardsPerPage;
  const firstPostIndex = lastPostIndex - cardsPerPage;
  const currentCards = searchGames.slice(firstPostIndex, lastPostIndex);
  const searching = Data.flatMap((games) =>
    games.filter((game) =>
      game.name.toLowerCase().includes(query.toLowerCase())
    )
  );

  useEffect(() => {
    setCurrentPage(1);
    if (query.length > 0) {
      setSearchGames(searching);
    } else {
      setSearchGames([]);
    }
  }, [query]);

  return (
    <>
      <div className="search-panel">
        <SearchInput inputs={setQuery} />
        {query.length > 0 ? (
          <>
            <div className="results-container">
              <SearchPage Cards={currentCards} onClose={props.onClose} />
            </div>
            <div>
              <Pagination
                totalResults={searchGames.length}
                cardsPerPage={cardsPerPage}
                changePage={setCurrentPage}
                currentPage={currentPage}
              />
            </div>
          </>
        ) : (
          <>
            <p className="emptySearch">Looking for Something ?</p>
          </>
        )}
      </div>
    </>
  );
};

export default Search;

/* {searchGames.map((games) => (
          <SearchResults
            key={games.id}
            games={{
              id: games.id,
              background_image: games.background_image,
              name: games.name,
              rating: games.rating,
              price: games.reviews_text_count,
            }}
          />
        ))} */
