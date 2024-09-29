import { TCategory } from "./category.interface";
import Category from "./category.model";

const createCategory = async (payload: TCategory) => {
    // create a new category
    const category = await Category.create(payload);
    return category;
}

const getAllCategories = async () => {
    // get all categories
    const categories = await Category.find();
    return categories;
}

export const CategoryService = {
    create: createCategory,
    getAll: getAllCategories,
}