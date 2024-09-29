import express from "express";
import { CustomerControllers } from "./customer.controller";
import validateRequest from "../../middlewares/validateRequest";
// import { customerValidationSchema } from "./customer.validation";
const router = express.Router();

router.post(
  "/create",
//   validateRequest(customerValidationSchema),
  CustomerControllers.create
);

export const CustomerRouter = router;
