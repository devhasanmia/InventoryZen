import { Router } from "express";
import { CustomerRouter } from "../modules/customer/customer.route";
import { CategoryRouter } from "../modules/category/category.route";
import { ProductRouter } from "../modules/product/product.route";
import { StockRouter } from "../modules/stock/stock.route";
import { SalesRouter } from "../modules/sales/stock.route";

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
  },
  {
    path: "/sales",
    route: SalesRouter
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
