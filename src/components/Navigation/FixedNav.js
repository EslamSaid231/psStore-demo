import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import storeLogo from "../../Assets/psStoreLogo.png";
import CartButton from "../Cart/CartButton";
import CollectionLinks from "../Collectionmenu/CollectionLinks";

import "./FixedNav.css";
import Search from "./Search";
const FixedNav = () => {
  const [scollClass, setScrollClass] = useState("search-container");
  const [showResults, setShowResults] = useState();
  const [collectionMenu, setCollectionMenu] = useState(false);
  const [stickyClass, setStickyClass] = useState("");
  const showCollection = () => {
    setCollectionMenu(true);
  };
  const hideCollection = () => {
    setCollectionMenu(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", stickyNavbar);

    return () => {
      window.removeEventListener("scroll", stickyNavbar);
    };
  }, []);
  const stickyNavbar = () => {
    if (window) {
      let windowHeight = window.scrollY;
      if (windowHeight > 100) {
        setStickyClass("fixedNavpos");
        setScrollClass("fixed");
      } else {
        setStickyClass("relative");
        setScrollClass("search-container");
      }
    }
  };
  return (
    <div className={`${stickyClass}`}>
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
              Browse
              <div className={collectionMenu ? "showMenu" : "hideMenu"}>
                <CollectionLinks />
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
        </div>
        <div className="panels">
          <CartButton />
          <span onClick={() => setShowResults(!showResults)}>
            <i className="fa fa-search"></i>
          </span>
          {showResults && (
            <div className={scollClass}>
              <Search onClose={setShowResults} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FixedNav;
