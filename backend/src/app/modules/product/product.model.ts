import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";
import { string } from "zod";

const productSchema = new Schema<TProduct>(
  {
    productName: {
      type: String,
      required: true,
    },
    productBrand: {
      type: String,
      required: true,
    },
    productCategory: {
      type: String,
      ref: "Category",
    },
    unit: {
      type: String,
      enum: [
        "পিস",
        "কেজি",
        "মণ",
        "গ্রাম",
        "টন",
        "লিটার",
        "মিলিলিটার",
        "ডজন",
        "গজ",
        "মিটার",
        "সেন্টিমিটার",
        "ইঞ্চি",
        "ফুট",
        "কোয়ার্টার",
        "পাউন্ড",
        "আউন্স",
        "মিলিগ্রাম",
        "কিউবিক মিটার",
        "গ্যালন",
        "কুইন্টাল",
        "বারেল",
        "প্যাকেট",
        "বোতল",
      ],
      required: true,
    },
    SKU: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Product = model<TProduct>("Product", productSchema);

export default Product;
