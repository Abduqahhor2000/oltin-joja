import {
    createBrowserRouter, useNavigate,
  } from "react-router-dom";
import { useEffect } from "react";
import Main from "./pages/Main/Main";  
import Login from "./pages/Login/Login"
import ErrorPage from "./pages/Error/ErrorPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import EditProduct from "./pages/EditProuduct/EditProduct";
import ProductCategory from "./pages/Menus/ProductCategory/Index";
import ProductList from "./pages/Menus/ProductList/Index";
import InvoiceList from "./pages/Invoice/InvoiceList";
import InvoiceDetail from "./pages/Invoice/InvoiceDetail";
import CustomersList from "./pages/Customers/CustomersList/Index"
import CustomersReview from "./pages/Customers/CustomersReview/Index"
// import Settings from "./pages/Settings/Settings"
import Admins from "./pages/Settings/Admin/Index";
import Categories from "./pages/Settings/Category/Index";
import InvoiceInfo from "./pages/InvoiceInfo/InvoiceInfo";


const router = createBrowserRouter([
    {   
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage />,
      children: [
        { 
          index: true,
          element: <product_category />,
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
          path: "/admins",
          element: <Admins />,
        },
        {
          path: "/categories",
          element: <Categories />,
        },
        {
          path: "/invoice_info",
          element: <InvoiceInfo />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login/>,
    },
  ]);

  export default router;