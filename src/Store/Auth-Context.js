import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
  location: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    if (storedUserLoggedInInfo === "1") {
      setIsLoggedIn(true);
    }
    if (!storedUserLoggedInInfo) {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn, storedUserLoggedInInfo]);

  const LogoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  const LoginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: LogoutHandler,
        onLogin: LoginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
