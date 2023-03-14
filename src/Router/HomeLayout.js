import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navigation/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
