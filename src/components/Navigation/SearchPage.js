import React from "react";
import "./SearchPage.css";
import SearchResults from "./SearchResults";

const SearchPage = ({ Cards, onClose }) => {
  console.log(Cards);
  return (
    <div className="cards-container">
      {Cards.map((games) => (
        <div className="result-card">
          <SearchResults
            key={games.id}
            onClose={onClose}
            games={{
              id: games.id,
              background_image: games.background_image,
              name: games.name,
              rating: games.rating,
              price: games.reviews_text_count,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
