import { model, Schema } from "mongoose";
import { TSales } from './stock.interface';
import Stock from "../stock/stock.model";
import AppError from "../../errors/AppError";

const salesSchema = new Schema<TSales>(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      default:0
    },
    totalPrice: {
      type: Number,
      default:0
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    cashPayment: {
      type: Number,
      default: 0,
    },
    due: {
      type: Number,
      default: 0,
    },
  }
);

salesSchema.pre<TSales>("save", async function (next) {
  const {product, quantity} = this;
  const stock = await Stock.find({product});
  console.log(stock[0])
  if (!stock || stock.length === 0) {
    throw new Error("Invalid product");
  }
  // Stock management
  if (stock[0].quantity < this.quantity) {
    throw new AppError(404, "Insufficient stock");
  }
  const updatedStock = await Stock.findByIdAndUpdate(stock[0]._id, {quantity: stock[0].quantity - this.quantity}, {new: true});
  if (!updatedStock) {
    throw new Error("Stock not available");
  }
  this.totalPrice = quantity * updatedStock.salePrice ;
  next();
});



const Sales = model<TSales>("Sales", salesSchema);

export default Sales;