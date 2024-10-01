import { Schema, model } from "mongoose";
import { TStock } from "./stock.interface";

const stockSchema = new Schema<TStock>(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      unique: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    purchasePrice: {
      type: Number,
      required: true,
    },
    salePrice: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      default:0
    },
    discount: {
      type: Number,
      default: 0,
    },
    dealer: {
      type: String,
      required: true,
    },
    cashPayment: {
      type: Number,
      required: true,
    },
    due: {
      type: Number,
      default: 0,
    },
    extraExpense: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

stockSchema.pre<TStock>("save", function (next) {
  const { quantity, purchasePrice, discount } = this;
  this.totalPrice = quantity * purchasePrice - discount;
  this.due = this.totalPrice - this.cashPayment;
  next();
});

const Stock = model("Stock", stockSchema);

export default Stock;
