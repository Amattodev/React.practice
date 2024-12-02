import React from "react";
import { useContext } from "react";

import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { AuthContext } from "./AuthService";

const LoggedInRoute = () => {
  const user = useContext(AuthContext);

  return user ? <Outlet /> : <Navigate replace to={"/login"} />;
};

export default LoggedInRoute;
