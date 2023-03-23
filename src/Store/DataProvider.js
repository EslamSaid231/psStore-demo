import React, { useContext, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router";
import Data from "../API/Data.json";
export const DataContext = React.createContext({
  page: "1",
  setPage: () => {},
});

//a custom hook to handle data provided to components
export function DataContextProvider({ children }) {
  const [games, setGames] = useState([]);
  const [pagestate, setPageState] = useState(0);
  const location = useLocation();
  useLayoutEffect(() => {
    setGames(Data[pagestate]);
    if (location.pathname === "/") {
      setPageState(0);
    } else {
      setPageState(pagestate);
    }
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
