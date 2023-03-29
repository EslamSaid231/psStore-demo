import React, { useEffect } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router";
import { useSubmit } from "react-router-dom";
import Navbar from "../components/Navigation/Navbar";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { getTokenDuration } from "../components/util/auth";

const RootLayout = () => {
  const navigation = useNavigate();
  const token = useLoaderData();
  const submit = useSubmit();
  useEffect(() => {
    if (!token) {
      return;
    }
    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
    }
    const tokenDuration = getTokenDuration();
    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);
  return (
    <>
      {token && <Navbar />}

      {navigation.state === "loading" ? <LoadingSpinner /> : <Outlet />}
    </>
  );
};

export default RootLayout;
