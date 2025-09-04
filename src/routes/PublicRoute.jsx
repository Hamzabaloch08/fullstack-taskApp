// routes/PublicRoute.jsx
import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";

const RootRedirect = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/auth/register" />;
};

const publicRoutes = [
  {
    path: "/",
    element: <RootRedirect />,   // 👈 yahan rakha
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
];

export default publicRoutes;
