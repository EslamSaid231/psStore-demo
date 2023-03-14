import React, { useState } from "react";
import { Link } from "react-router-dom";
import storeLogo from "../../Assets/psStoreLogo.png";
import CollectionLinks from "../Collectionmenu/CollectionLinks";

import "./FixedNav.css";
const FixedNav = () => {
  const [collectionMenu, setCollectionMenu] = useState(false);
  const showCollection = () => {
    setCollectionMenu(true);
  };
  const hideCollection = () => {
    setCollectionMenu(false);
  };

  return (
    <div className="fixedNav">
      <div>
        <h2>
          <img src={storeLogo} alt="/" />
          PlayStation.Store
        </h2>
      </div>
      <div className="Menu-btns">
        <span>
          <button>Latest</button>
        </span>
        <span>
          <button
            onMouseOver={showCollection}
            onMouseLeave={hideCollection}
            onClick={() => setCollectionMenu(false)}
          >
            Collection
            <div className={collectionMenu ? "showMenu" : "hideMenu"}>
              <ul>
                <CollectionLinks />
              </ul>
            </div>
          </button>
        </span>
        <span>
          <button>Deals</button>
        </span>
        <span>
          <button>PS5</button>
        </span>
        <span>
          <button>Subscriptions</button>
        </span>
        <span>
          <button>Browse</button>
        </span>
      </div>
    </div>
  );
};

export default FixedNav;
