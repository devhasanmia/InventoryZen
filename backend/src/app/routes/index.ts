import { Router } from "express";
import { CustomerRouter } from "../modules/customer/customer.route";
import { CategoryRouter } from "../modules/category/category.route";
import { ProductRouter } from "../modules/product/product.route";
import { StockRouter } from "../modules/stock/stock.route";

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
  },
  {
    path: "/stock",
    route: StockRouter
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
