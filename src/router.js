import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "./pages/Main/Main";  
import Login from "./pages/Login/Login"
import ErrorPage from "./pages/Error/ErrorPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import EditProduct from "./pages/EditProuduct/EditProduct";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/edit_product",
          element: <EditProduct />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login/>,
    },
  ]);

  export default router;