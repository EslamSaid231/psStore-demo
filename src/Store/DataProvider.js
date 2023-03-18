import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router";
import Data from "../API/Data.json";
export const DataContext = React.createContext({
  page: "1",
  setPage: () => {},
});

export function DataContextProvider({ children }) {
  const [games, setGames] = useState([]);
  const [pagestate, setPageState] = useState(0);
  const location = useLocation();
  useLayoutEffect(() => {
    setGames(Data[pagestate]);
    // async function fetchData() {
    //   const { results } = await fetch(
    //     `https://api.rawg.io/api/games?key=a213d0a5f1704bdd90578d505acfd0f1&page=${pagestate}`
    //   ).then((response) => response.json());
    //   console.log(results);
    //   // setGames(data[pagestate]);
    // }
    if (location.pathname === "/") {
      setPageState(0);
    } else {
      setPageState(pagestate);
    }
    console.log(location);
  }, [pagestate, location.pathname]);
  return (
    <DataContext.Provider value={{ Data, games, setPageState, pagestate }}>
      {children}
    </DataContext.Provider>
  );
}
export function useData() {
  const context = useContext(DataContext);

  return context;
}

// fetch(
//     "https://api.rawg.io/api/games?key=a213d0a5f1704bdd90578d505acfd0f1&page=2"
//   ).then((response) => response.json().results);
