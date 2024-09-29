import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TCustomer } from "./customer.interface";
import Customer from "./customer.model";
// create a new customer
const createCustomer = async (payload: TCustomer) => {
  const customer = await Customer.create(payload);
  return customer;
};
// get all customers
const getAllCustomers = async () => {
  const customers = await Customer.find();
  if (customers.length === 0) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "দুঃখিত, ডাটাবেজে কোন গ্রাহক পাওয়া যায়নি।"
    );
  }
  return customers;
};
// get a customer by id
const getCustomerById = async (id: string) => {
  const customer = await Customer.findById(id);
  if (!customer) {
    throw new AppError(httpStatus.NOT_FOUND, "দুঃখিত, গ্রাহকটি পাওয়া যায়নি।");
  }
  return customer;
};
// update a customer by id

const updateCustomerById = async (id: string, payload: TCustomer) => {
  const customer = await Customer.findByIdAndUpdate(id, payload, { new: true });
  if (!customer) {
    throw new AppError(httpStatus.NOT_FOUND, "দুঃখিত, গ্রাহকটি পাওয়া যায়নি।");
  }
  return customer;
};

// delete a customer by id
const deleteCustomerById = async (id: string) => {
  const customer = await Customer.findById(id);
  if (!customer) {
    throw new AppError(httpStatus.NOT_FOUND, "দুঃখিত, গ্রাহকটি পাওয়া যায়নি।");
  }
  if (customer.due > 0) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      `দুঃখিত, গ্রাহকের বাকির পরিমাণ ${customer.due} টাকা। বাকির টাকা পরিশোধ না হওয়া পর্যন্ত মুছে ফেলা সম্ভব নয়।`
    );
  }

  await Customer.findByIdAndDelete(id);
  return customer;
};


export const CustomerService = {
  create: createCustomer,
  getAll: getAllCustomers,
  getById: getCustomerById,
  update: updateCustomerById,
  delete: deleteCustomerById,
};
