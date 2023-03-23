import { createContext, useContext, useState } from "react";

export const LoadingContext = createContext({
  loading: true,
  setLoading: null,
});

export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const value = { loading, setLoading };
  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
}
export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("Check your code context should be used somewhere else");
  }
  return context;
}
