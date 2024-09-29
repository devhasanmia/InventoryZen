import express from "express";
import { CustomerControllers } from "./customer.controller";
import validateRequest from "../../middlewares/validateRequest";
import { CustomerValidation } from "./customer.validation";
const router = express.Router();

router.post(
  "/create",
  validateRequest(CustomerValidation.create),
  CustomerControllers.create
);
router.get("/all", CustomerControllers.getAll);
router.get("/:id", CustomerControllers.getById);
router.put(
  "/:id",
  validateRequest(CustomerValidation.update),
  CustomerControllers.update
);
router.delete("/:id", CustomerControllers.delete);

export const CustomerRouter = router;
