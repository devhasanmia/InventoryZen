import { Router } from "express";
import { CustomerRouter } from "../modules/customer/customer.route";
import { CategoryRouter } from "../modules/category/category.route";
import { ProductRouter } from "../modules/product/product.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/customer",
    route: CustomerRouter,
  },
  {
    path: "/category",
    route: CategoryRouter
  },
  {
    path: "/product",
    route: ProductRouter
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
