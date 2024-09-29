import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import stockValidationSchema from "./stock.validation";
import { StockController } from "./stock.controller";
const router = express.Router();

router.post(
  "/",
  validateRequest(stockValidationSchema),
  StockController.addStack
);


export const StockRouter = router;
