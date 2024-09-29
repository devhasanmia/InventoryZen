import { RequestHandler } from "express";
import { ProductService } from "./product.service";

const createProduct: RequestHandler = async (req, res, next) => {
    try {
        const product = await ProductService.create(req.body);
        res.json({
            success: true,
            message: "নতুন প্রোডাক্ট তৈরি সফল হয়েছে।",
            data: product,
        });
    } catch (error) {
        next(error);
    }
}

const getAllProducts: RequestHandler = async (req, res, next) => {
    try {
        const products = await ProductService.getAll();
        res.json({
            success: true,
            message: "প্রোডাক্টের তালিকা সফলভাবে লোড করা হয়েছে!",
            data: products,
        });
    } catch (error) {
        next(error);
    }
}

const getProductById: RequestHandler = async (req, res, next) => {
    try {
        const product = await ProductService.getById(req.params.id);
        res.json({
            success: true,
            message: "নির্বাচিত প্রোডাক্টের তথ্য সফলভাবে পাওয়া গেছে!",
            data: product,
        });
    } catch (error) {
        next(error);
    }
}

const updateProduct: RequestHandler = async (req, res, next) => {
    try {
        const product = await ProductService.update(req.params.id, req.body);
        res.json({
            success: true,
            message: "নির্বাচিত প্রোডাক্টের তথ্য সফলভাবে হালনাগাদ করা হয়েছে!",
            data: product,

        });
    } catch (error) {
        next(error);
    }
}

const deleteProduct: RequestHandler = async (req, res, next) => {
    try {
        const product = await ProductService.delete(req.params.id);
        res.json({
            success: true,
            message: "নির্বাচিত প্রোডাক্টটি সফলভাবে মুছে ফেলা হয়েছে!",
            data: product,
        });
    } catch (error) {
        next(error);
    }
}

export const ProductController = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
}