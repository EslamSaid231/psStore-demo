import "./App.css";
import Navbar from "./components/Navigation/Navbar";
import MainContainer from "./components/MainTitle/MainContainer";
import { DataContextProvider } from "./Store/DataProvider";

import LoginPage from "./SignIn/LoginPage";

import { useContext } from "react";
import AuthContext from "./Store/Auth-Context";

import { Navigate, Route, Routes } from "react-router";
import GameDetails from "./Pages/GameDetails/GameDetails";

import Genre from "./Pages/collection pages/Genre";
import Games from "./Pages/AllGames/Games";
import Cart from "./components/Cart/Cart";
import { useSelector } from "react-redux";

function App() {
  const ctx = useContext(AuthContext);
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <div className="App">
      <div>
        <DataContextProvider>
          <div>{ctx.isLoggedIn ? <Navbar /> : "1"}</div>
          {showCart && <Cart />}
          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="/" element={<MainContainer />} />
            <Route path="/game/:gameId" element={<GameDetails />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/:genre" element={<Genre />} />
          </Routes>
        </DataContextProvider>
      </div>
    </div>
  );
}

export default App;

{
  /* <Route
              path="/"
              element={
                !ctx.isLoggedIn ? (
                  <Navigate to="login" />
                ) : (
                  <Navigate to="home" />
                )
              }
            /> */
}
