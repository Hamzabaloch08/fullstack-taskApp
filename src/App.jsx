import { createBrowserRouter, RouterProvider } from "react-router";
import publicRoutes from "./routes/PublicRoute.jsx";
import PrivateRoutes from "./routes/PrivateRoutes.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter([
  ...publicRoutes,
  ...PrivateRoutes,
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;