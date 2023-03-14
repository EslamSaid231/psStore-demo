import React, { useContext, useEffect, useState } from "react";

export const DataContext = React.createContext({
  page: "1",
  setPage: () => {},
});

export function DataContextProvider({ children }) {
  const [games, setGames] = useState([]);

  const [pagestate, setPageState] = useState("1");

  useEffect(() => {
    async function fetchData() {
      const { results } = await fetch(
        `https://api.rawg.io/api/games?key=a213d0a5f1704bdd90578d505acfd0f1&page=1`
      ).then((response) => response.json());
      console.log(results);

      setGames(results);
    }
    fetchData();
  }, [pagestate]);
  return (
    <DataContext.Provider value={{ games, setPageState }}>
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
