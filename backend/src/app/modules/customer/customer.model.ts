import { model, Schema } from "mongoose";
import { TCustomer } from "./customer.interface";

const customerSchema = new Schema<TCustomer>(
  {
    customerName: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    nid: {
      type: String,
      default: "N/A"
    },
    due: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Customer = model<TCustomer>("Customer", customerSchema);
export default Customer;
