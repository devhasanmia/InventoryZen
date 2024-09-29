import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TProduct } from "./product.interface";
import Product from "./product.model";

const createProduct = async (payload: TProduct) => {
   const product = await Product.create(payload);
   return product;
}

const getAllProducts = async () => {
    const products = await Product.find().populate("productCategory", "categoryName");
    if (products.length === 0) {
        throw new AppError(httpStatus.NOT_FOUND, "কোন প্রোডাক্ট পাওয়া যায়নি।");
    }
    return products;
}

const getProductById = async (id: string) => {
    const product = await Product.findById(id).populate("productCategory", "categoryName");
    if (!product) {
        throw new AppError(httpStatus.NOT_FOUND, "কোন প্রোডাক্ট পাওয়া যায়নি।");
    }
    return product;
}

const updateProduct = async (id: string, payload: TProduct) => {
    const product = await Product.findByIdAndUpdate(id, payload, { new: true }).populate("productCategory", "categoryName");
    if (!product) {
        throw new AppError(httpStatus.NOT_FOUND, "কোন প্রোডাক্ট পাওয়া যায়নি।");
    }
    return product;
}

const deleteProduct = async (id: string) => {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
        throw new AppError(httpStatus.NOT_FOUND, "কোন প্রোডাক্ট পাওয়া যায়নি।");
    }
    return product;
}

export const ProductService = {
    create: createProduct,
    getAll: getAllProducts,
    getById: getProductById,
    update: updateProduct,
    delete: deleteProduct,
}