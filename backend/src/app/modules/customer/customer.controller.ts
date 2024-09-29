import { RequestHandler } from "express";
import { CustomerService } from "./customer.service";

const createCustomer: RequestHandler = async (req, res, next) => {
  try {
    const customer = await CustomerService.create(req.body);
    res.status(201).json({
      success: true,
      message: "গ্রাহক সফলভাবে তৈরি করা হয়েছে।",
      data: customer,
    });
  } catch (error) {
    console.log(error);
  }
};

export const CustomerControllers = {
  create: createCustomer,
};
