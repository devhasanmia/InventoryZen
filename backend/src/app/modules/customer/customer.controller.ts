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
    next(error);
  }
};

const getAllCustomers: RequestHandler = async (req, res, next) => {
  try {
    const customers = await CustomerService.getAll();
    res.json({
      success: true,
      message: `সকল গ্রাহকের তথ্য সফলভাবে প্রাপ্ত হয়েছে।`,
      data: customers,
    });
  } catch (error) {
    next(error);
  }
}

const getCustomerById: RequestHandler = async (req, res, next) => {
  try {
    const customer = await CustomerService.getById(req.params.id);
    res.json({
      success: true,
      message: "গ্রাহকের তথ্য সফলভাবে প্রাপ্ত হয়েছে।",
      data: customer,
    });
  } catch (error) {
    next(error);
  }
}

const updateCustomer: RequestHandler = async (req, res, next) => {
  try {
    const updatedCustomer = await CustomerService.update(req.params.id, req.body);
    res.json({
      success: true,
      message: "গ্রাহকের তথ্য সফলভাবে হালনাগাদ করা হয়েছে।",
      data: updatedCustomer,
    });
  } catch (error) {
    next(error);
  }
}

const deleteCustomer: RequestHandler = async (req, res, next) => {
  try {
    await CustomerService.delete(req.params.id);
    res.json({
      success: true,
      message: "গ্রাহকটি সফলভাবে মুছে ফেলা হয়েছে।",
    });
  } catch (error) {
    next(error);
  }
}

export const CustomerControllers = {
  create: createCustomer,
  getAll: getAllCustomers,
  getById: getCustomerById,
  update: updateCustomer,
  delete: deleteCustomer,
};
