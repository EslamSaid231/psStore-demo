import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./Store/Redux/store/index";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContextProvider } from "./Store/Auth-Context";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
