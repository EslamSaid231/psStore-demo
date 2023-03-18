import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
  location: () => {},
});

export const AuthContextProvider = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInfo === "1") {
      setIsLoggedIn(true);
      navigate("/", redirect);
    }
    if (!storedUserLoggedInInfo) {
      setIsLoggedIn(false);
      navigate("/login");
    }
  }, [isLoggedIn]);

  const LogoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    redirect("login");
  };
  const LoginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
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
