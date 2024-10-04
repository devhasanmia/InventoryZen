import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateCustomerMutation } from "../../redux/api/api";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

type Inputs = {
  customerName: string;
  mobileNumber: string;
  address: string;
  nid: number;
  due: number;
};

type errTypes = {
  path: string;
  message: string;
}

const AddCustomer = () => {
  const [createCustomer, { isError, isLoading, isSuccess, error }] =
    useCreateCustomerMutation();
    const [errorMsg, setErrorMsg] = useState<errTypes[]>([]);


  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    createCustomer(formData)
  };

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        title: "নতুন গ্রাহক যোগ হয়েছে!",
        text: "গ্রাহকের তথ্যাদি ডাটাবেসে প্রবেশ করা হয়েছে!",
        icon: "success",
        confirmButtonText: "ঠিক আছে",
      });
      reset();
      setErrorMsg([]);
    }
    if (isError) {
      setErrorMsg(error?.data?.errorSources);
      Swal.fire({
        title: "ব্যর্থতা",
        text: "আবার চেষ্টা করুন",
        icon: "error",
        confirmButtonText: "ঠিক আছে",
      });
    }
  }, [isSuccess, isError, error, reset]);

  // Error message extract
  const mappedError = (fieldName: string) => {
    return errorMsg.find(err=> err.path === fieldName)?.message || "";
  }

  

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold text-gray-700 mb-8 text-center">
        গ্রাহক যোগ করুন
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto"
      >
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customerName" className="block text-gray-700">
            গ্রাহকের নাম
          </label>
          <input
            {...register("customerName")}
            type="text"
            id="customerName"
            placeholder="গ্রাহকের নাম লিখুন"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
          />
          {
            mappedError("customerName") && (
              <p className="text-red-500 text-xs italic">{mappedError("customerName")}</p>
            )
          }
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label htmlFor="mobileNumber" className="block text-gray-700">
            মোবাইল নম্বর
          </label>
          <input
            {...register("mobileNumber", { required: "মোবাইল নম্বর প্রয়োজন" })}
            type="text"
            id="mobileNumber"
            placeholder="মোবাইল নম্বর লিখুন"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
          />
          {
            mappedError("mobileNumber") && (
              <p className="text-red-500 text-xs italic">{mappedError("mobileNumber")}</p>
            )
          }
        </div>

        {/* Address */}
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700">
            ঠিকানা
          </label>
          <input
            {...register("address", { required: "ঠিকানা প্রয়োজন" })}
            type="text"
            id="address"
            placeholder="ঠিকানা লিখুন"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
          />
          {
            mappedError("address") && (
              <p className="text-red-500 text-xs italic">{mappedError("address")}</p>
            )
          }
        </div>

        {/* NID */}
        <div className="mb-4">
          <label htmlFor="nid" className="block text-gray-700">
            ভোটার আইডি নাম্বার
          </label>
          <input
            {...register("nid", { valueAsNumber: true })}
            type="number"
            id="nid"
            placeholder="ভোটার আইডি নাম্বার লিখুন"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
          />
          {
            mappedError("nid") && (
              <p className="text-red-500 text-xs italic">{mappedError("nid")}</p>
            )
          }
        </div>

        {/* Due */}
        <div className="mb-4">
          <label htmlFor="due" className="block text-gray-700">
            বাকি (৳)
          </label>
          <input
            {...register("due", { valueAsNumber: true })}
            type="number"
            id="due"
            placeholder="বাকি টাকা লিখুন"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
          />
          {
            mappedError("due") && (
              <p className="text-red-500 text-xs italic">{mappedError("due")}</p>
            )
          }
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          disabled={isLoading}
        >
          {isLoading ? "যোগ হচ্ছে..." : "গ্রাহক যোগ করুন"}
        </button>
      </form>
    </div>
  );
};

export default AddCustomer;
