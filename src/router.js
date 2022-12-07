import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "./pages/Main/Main";  
import Login from "./pages/Login/Login"
import ErrorPage from "./pages/Error/ErrorPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import EditProduct from "./pages/EditProuduct/EditProduct";
import ProductCategory from "./pages/Menus/ProductCategory";
import ProductList from "./pages/Menus/ProductList";
import InvoiceList from "./pages/Invoice/InvoiceList";
import InvoiceDetail from "./pages/Invoice/InvoiceDetail";
import CustomersList from "./pages/Customers/CustomersList"
import CustomersReview from "./pages/Customers/CustomersReview"
import Settings from "./pages/Settings/Settings"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage />,
      children: [
        { 
          index: true,
          element: <Dashboard />,
        },
        { 
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/edit_product",
          element: <EditProduct />,
        },
        {
          path: "/product_category",
          element: <ProductCategory />,
        },
        {
          path: "/product_list",
          element: <ProductList />,
        },
        {
          path: "/invoice_detail",
          element: <InvoiceDetail />,
        },
        {
          path: "/invoice_list",
          element: <InvoiceList />,
        },
        {
          path: "/customers_review",
          element: <CustomersReview />,
        },
        {
          path: "/customers_list",
          element: <CustomersList />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login/>,
    },
  ]);

  export default router;