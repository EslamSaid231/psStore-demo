import React from "react";
import FixedNav from "./FixedNav";
import "./Navbar.css";
import NavMenu from "./NavMenu";
const Navbar = () => {
  return (
    <>
      <div className="navContainer">
        <div className="sony-navbar">
          <h2>SONY</h2>
        </div>
        <div>
          <NavMenu />
        </div>
        <div>
          <FixedNav />
        </div>
      </div>
    </>
  );
};

export default Navbar;
