import { Router } from "express";
import { CustomerRouter } from "../modules/customer/customer.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/customer",
    route: CustomerRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
