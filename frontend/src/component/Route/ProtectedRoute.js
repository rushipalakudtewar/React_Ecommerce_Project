import React from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ isAuthenticated, user }) => {
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return user ? user : <Outlet />;
};

export default ProtectedRoute;
