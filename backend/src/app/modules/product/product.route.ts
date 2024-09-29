import express from "express";
import { ProductController } from "./product.controller";
import validateRequest from "../../middlewares/validateRequest";
import { productValidationSchema } from "./product.validation";
const router = express.Router();

router.post(
  "/create",
  validateRequest(productValidationSchema),
  ProductController.createProduct
);

router.get("/all", ProductController.getAllProducts);
router.get("/:id", ProductController.getProductById);

export const ProductRouter = router;
