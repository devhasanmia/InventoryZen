import { Types } from "mongoose";

export type TSales = {
  product: Types.ObjectId;
  quantity: number;
  price: number;
  totalPrice: number;
  customer: Types.ObjectId;
  discount: number;
  cashPayment: number;
  due: number;
};
