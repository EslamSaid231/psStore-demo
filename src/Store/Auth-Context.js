import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
  location: () => {},
});

export const AuthContextProvider = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");
  useEffect(() => {
    if (storedUserLoggedInInfo === "1") {
      setIsLoggedIn(true);
    }
    if (!storedUserLoggedInInfo) {
      setIsLoggedIn(false);
      navigate("auth?mode=login");
    }
  }, [isLoggedIn, storedUserLoggedInInfo]);

  const LogoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  const LoginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    navigate("/");
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
