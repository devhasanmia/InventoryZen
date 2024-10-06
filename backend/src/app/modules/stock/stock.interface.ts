import { Types } from "mongoose";

export type TStock = {
  product: Types.ObjectId;
  quantity: number;
  purchasePrice: number;
  salePrice: number;
  totalPrice: number;
  discount: number;
  dealer: string;
  cashPayment: number;
  due: number;
};
