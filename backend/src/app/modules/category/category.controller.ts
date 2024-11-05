import { Request, RequestHandler } from "express";
import { CategoryService } from "./category.service";

const createCategory: RequestHandler = async (req, res, next) => {
   try {
    const category = await CategoryService.create(req.body);
    res.status(201).json({
      success: true,
      message: "ক্যাটেগরি সফলভাবে তৈরি করা হয়েছে।",
      data: category,
    });
   } catch (error) {
    next(error);
   }
}

const getAllCategories: RequestHandler = async (req, res, next) => {
    try {
    const categories = await CategoryService.getAll();
    res.json({
      success: true,
      message: "সকল ক্যাটেগরি সফলভাবে লোড করা হয়েছে।",
      data: categories,
    });
    } catch (error) {
    next(error);
   }
}


export const CategoryController = {
    createCategory,
    getAllCategories,
}