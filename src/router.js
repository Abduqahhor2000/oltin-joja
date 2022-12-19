import { createBrowserRouter } from "react-router-dom";
// import { useEffect } from "react";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import ErrorPage from "./pages/Error/ErrorPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import EditProduct from "./pages/EditProuduct/EditProduct";
import ProductCategory from "./pages/Menus/ProductCategory/ProductCategory";
import ProductList from "./pages/Menus/ProductList/ProductList";
import InvoiceList from "./pages/Invoice/InvoiceList";
import InvoiceDetail from "./pages/Invoice/InvoiceDetail";
import CustomersList from "./pages/Customers/CustomersList/CustomersList";
import CustomersReview from "./pages/Customers/CustomersReview/CustomersReview";
// import Settings from "./pages/Settings/Settings"
import Admins from "./pages/Settings/Admin/Admins";
// import AddProduct from "./pages/AddProduct/AddProduct"
import AddAdmin from "./pages/Settings/Admin/AddAdmin";
import EditAdmin from "./pages/Settings/Admin/EditAdmin";
// import Categories from "./pages/Settings/Category/Categories";
import InvoiceInfo from "./pages/InvoiceInfo/InvoiceInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ProductCategory />,
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
      // {
      //   path: "/product_category/add-product",
      //   element: <AddProduct root={{text:"Product category", path: "/product_category"}} />,
      // },
      // {
      //   path: "/product_list/add-product",
      //   element: <AddProduct root={{text:"Product list", path: "/product_list"}} />,
      // },
      // {
      //   path: "/categories",
      //   element: <Categories />,
      // },
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
        path: "/admins/add-admin",
        element: <AddAdmin />,
      },
      {
        path: "/admins/edit-admin",
        element: <EditAdmin />,
      },
      {
        path: "/invoice_info",
        element: <InvoiceInfo />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
