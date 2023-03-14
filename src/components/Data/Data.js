import React from "react";

const Data = (props) => {
  fetch(
    "https://api.rawg.io/api/games?key=a213d0a5f1704bdd90578d505acfd0f1&page=2"
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export default Data;
