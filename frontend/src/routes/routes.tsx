import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Customer from "../pages/Customer/Customer";
import AddCustomer from "../pages/Customer/AddCustomer";

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
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
