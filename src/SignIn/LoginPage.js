import React, { useContext, useEffect, useReducer, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import AuthContext from "../Store/Auth-Context";
import CanvasDraw from "./CanvasDraw";
import "./LoginPage.css";

//reducers that works just to check the validity of relative inputs dynamically
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.includes("@"),
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
    };
  }
};
const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.length > 8,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.length > 8,
    };
  }
};
const LoginPage = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const [formIsValid, setFormIsValid] = useState(false);
  /*reducer hook that is called dynamically with inputs targets
  that passes the validity the AuthContext with which the approval
  for redirection is processed*/
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });
  const authCtx = useContext(AuthContext);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);
  const emailChangeHandler = (e) => {
    dispatchEmail({ type: "USER_INPUT", val: e.target.value });
  };
  const passwordChangeHandler = (e) => {
    dispatchPassword({ type: "USER_INPUT", val: e.target.value });
  };
  //checks validity while the input loses focus
  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };
  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    if (formIsValid) {
      await authCtx.onLogin(emailState.value, passwordState.value);
    }
  };
  return (
    <div className="Login-container">
      <form onSubmit={submitHandler} className="login-form">
        <div className="form-inputs">
          <h3>{isLogin ? "Log in" : "Create a new user"}</h3>
          <label htmlFor="email" className="email">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
            className={!emailIsValid ? "invalid" : ""}
          />
          <label htmlFor="password" className="password">
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
            className={!passwordIsValid ? "invalid" : ""}
          />
          <button>{isLogin ? "Sign in" : "Sign up"}</button>
          <div className="signing-up">
            <span>
              {isLogin ? "Not a Member ?" : "Already a member ?"}{" "}
              <span>
                <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
                  {isLogin ? "Sign up" : "Sign in"}
                </Link>
              </span>
            </span>
          </div>
        </div>
      </form>
      {/*login page background image*/}
      <div className="canvas">
        <CanvasDraw />
      </div>
    </div>
  );
};

export default LoginPage;
