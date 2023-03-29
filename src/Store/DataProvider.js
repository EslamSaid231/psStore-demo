import React, { useContext, useLayoutEffect, useState } from "react";

import Data from "../API/Data.json";
export const DataContext = React.createContext({
  page: "1",
  setPage: () => {},
});

//a custom hook to handle data provided to components
export function DataContextProvider({ children }) {
  const [games, setGames] = useState([]);
  const [pagestate, setPageState] = useState(0);

  useLayoutEffect(() => {
    setGames(Data[pagestate]);
  }, [pagestate]);
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
