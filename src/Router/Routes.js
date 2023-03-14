import React from "react";
import { Route, Routes } from "react-router";
import MainContainer from "../components/MainTitle/MainContainer";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="home" element={<MainContainer />} />
      </Routes>
    </>
  );
};

export default Routing;
