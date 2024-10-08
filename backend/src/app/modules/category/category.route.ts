import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { CategoryController } from "./category.controller";
import { CategoryValidation } from "./category.validation";
const router = express.Router();
router.post(
  "/create",
  validateRequest(CategoryValidation.create),
  CategoryController.createCategory
);
router.get("/all", CategoryController.getAllCategories);

export const CategoryRouter = router;
