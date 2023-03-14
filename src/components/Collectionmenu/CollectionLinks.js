import React from "react";
import { Link } from "react-router-dom";

const GenreLinks = (props) => {
  return (
    <>
      <li>
        <Link to="/games/action">Action</Link>
      </li>
      <li>
        <Link to="/games/adventure">Adventure</Link>
      </li>
      <li>
        <Link to="/games/rpg">RPG</Link>
      </li>
      <li>
        <Link to="/games/puzzle">Puzzle</Link>
      </li>
      <li>
        <Link to="/games/shooter">Shooter</Link>
      </li>
      <li>
        <Link to="/games/indie">Indie</Link>
      </li>
      <li>
        <Link to="/games/platformer">Platformer</Link>
      </li>
      <li>
        <Link to="/games/multiplayer">Multiplayer</Link>
      </li>
    </>
  );
};

export default GenreLinks;
