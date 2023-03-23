import { createContext, useContext, useState } from "react";

//not added yet but it's a global loading state while loading data
//as per now it requires some tweaks in code as the data is loaded locally
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
