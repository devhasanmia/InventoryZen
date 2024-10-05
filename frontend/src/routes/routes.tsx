import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Customer from "../pages/Customer/Customer";
import AddCustomer from "../pages/Customer/AddCustomer";
import Category from "../pages/Category/Category";
import AddCategory from "../pages/Category/AddCategory";
import Product from "../pages/Product/Product";
import AddProduct from "../pages/Product/AddProduct";
import StockAdjustment from "../pages/Stock/StockAdjustment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/customer",
    element: <App />,
    children: [
      {
        path: "",
        element: <Customer />,
      },
      {
        path: "add-customer",
        element: <AddCustomer />,
      },
      {
        path: ":id/edit",
        element: <Customer />,
      },
    ],
  },
  {
    path: "/category",
    element: <App />,
    children: [
      {
        path: "",
        element: <Category />,
      },
      {
        path: "add-category",
        element: <AddCategory />,
      },
    ],
  },
  {
    path: "/product",
    element: <App />,
    children: [
      {
        path: "",
        element: <Product />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
    ],
  },
  {
    path: "/stock-adjustment",
    element: <App />,
    children: [
      {
        path: "",
        element: <StockAdjustment />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
