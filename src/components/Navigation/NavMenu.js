import React from "react";

import { Form } from "react-router-dom";
import arrow from "../../Assets/arrow.png";
import psLogo from "../../Assets/pslogo.png";
import "./NavMenu.css";
const NavMenu = () => {
  // const dispatch = useDispatch;
  // const SigningHandler = () => {
  //   if (authCtx.isLoggedIn) {
  //     dispatch(authCtx.onLogout());
  //   }
  // };

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
          <Form action="/logout" method="post">
            <button>Sign out</button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
