import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navigation/Navbar";

const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <Link to="..">Go Back</Link>
      <h1>Could not find your page :(</h1>
    </div>
  );
};

export default ErrorPage;
