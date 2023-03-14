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

function App() {
  const ctx = useContext(AuthContext);
  const queryParams = new URLSearchParams(window.location.search);
  const gameId = queryParams.get("gameId");
  console.log(queryParams);
  return (
    <div className="App">
      <div>{ctx.isLoggedIn ? <Navbar /> : "1"}</div>
      <div>
        <DataContextProvider>
          <Routes>
            <Route
              path="/"
              element={
                !ctx.isLoggedIn ? <LoginPage /> : <Navigate to="/home" />
              }
            />
            <Route
              path="/home"
              element={ctx.isLoggedIn ? <MainContainer /> : <Navigate to="/" />}
            />
            <Route path="/game/:gameId" element={<GameDetails />} />
            <Route path="/games/:genre" element={<Genre />} />
          </Routes>
        </DataContextProvider>
      </div>
    </div>
  );
}

export default App;
