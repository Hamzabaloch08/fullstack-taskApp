import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import { checkUser } from "../features/auth/authThunks";
import Loader from "../components/common/Loader";

const RootRedirect = ({ children }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, status } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkUser());
  }, [dispatch]);

  if (status === "loading") {
    return <Loader/>;
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

const publicRoutes = [
  {
    path: "/",
    element: (
      <RootRedirect>
        <Navigate to="/auth/login" replace />
      </RootRedirect>
    ),
  },
  {
    path: "/auth/login",
    element: (
      <RootRedirect>
        <Login />
      </RootRedirect>
    ),
  },
  {
    path: "/auth/register",
    element: (
      <RootRedirect>
        <Register />
      </RootRedirect>
    ),
  },
];

export default publicRoutes;
