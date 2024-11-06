import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import Customer from "../pages/customers/Customer";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Dashboard />
      },
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "customers",
        element: <Customer />
      }
    ]
  }
]);

export default router;
