import express from "express";
import { SalesController } from "./sales.controller";

const router = express.Router();

router.post(
  "/",
  SalesController.newSales
);


export const SalesRouter = router;
