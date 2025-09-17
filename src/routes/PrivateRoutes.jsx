import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardLayout from "../layouts/DashboardLayout";
import { Navigate } from "react-router";
import { checkUser } from "../features/auth/authThunks";
import Loader from "../components/common/Loader";

const PrivateWrapper = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, status } = useSelector((state) => state.auth);

  useEffect(() => {
    if (status === "idle") {
      dispatch(checkUser());
    }
  }, [dispatch, status]);

  if (status === "loading" || status === "idle") {
    return <Loader />;
  }

  if (status === "succeeded" && isAuthenticated) {
    return <DashboardLayout />;
  }

  return <Navigate to="/auth/login" />;
};

const PrivateRoutes = [
  {
    path: "/dashboard",
    element: <PrivateWrapper />,
  },
];

export default PrivateRoutes;
