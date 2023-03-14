import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import arrow from "../../Assets/arrow.png";
import psLogo from "../../Assets/pslogo.png";
import AuthContext from "../../Store/Auth-Context";
import "./NavMenu.css";
const NavMenu = () => {
  const dispatch = useDispatch;
  const authCtx = useContext(AuthContext);
  const SigningHandler = () => {
    if (authCtx.isLoggedIn) {
      dispatch(authCtx.onLogout());
    }
  };

  return (
    <>
      <div className="NavMenuContainer">
        <div className="navlogo-Menu">
          <div>
            <img src={psLogo} alt="/" className="psLogo" />
          </div>
          <div className="Menu-btns">
            <span>
              <button>
                Games
                <img src={arrow} alt="/" />
              </button>
            </span>
            <span>
              <button>
                Hardware
                <img src={arrow} alt="/" />
              </button>
            </span>
            <span>
              <button>
                Services
                <img src={arrow} alt="/" />
              </button>
            </span>
            <span>
              <button>News</button>
            </span>
            <span>
              <button>Shop</button>
            </span>
            <span>
              <button>Support</button>
            </span>
          </div>
        </div>
        <div className="searchCont">
          <button onClick={SigningHandler}>
            {authCtx.isLoggedIn ? "Sign Out" : "Sign In"}
          </button>
          <span>
            <i className="fa fa-search"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
