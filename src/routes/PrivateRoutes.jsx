import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthUser } from "../features/auth/authThunks";
import DashboardLayout from "../layouts/DashboardLayout";
import { Navigate } from "react-router";



const PrivateWrapper = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, status } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuthUser());
  }, [dispatch]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return isAuthenticated ? <DashboardLayout /> : <Navigate to="/auth/login" />;
};

const PrivateRoutes = [
  {
    path: "/dashboard",
    element: <PrivateWrapper />,
  },
];

export default PrivateRoutes;
