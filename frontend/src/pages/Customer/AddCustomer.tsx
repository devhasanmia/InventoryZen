import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateCustomerMutation } from "../../redux/api/api";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import Label from "../../components/ui/Label";
import Input from "../../components/ui/input";
import Button from "../../components/ui/Button";

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
};

const AddCustomer = () => {
  const [createCustomer, { isError, isLoading, isSuccess, error }] =
    useCreateCustomerMutation();
  const [errorMsg, setErrorMsg] = useState<errTypes[]>([]);

  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    createCustomer(formData);
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
    return errorMsg.find((err) => err.path === fieldName)?.message || "";
  };

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
          <Label name="customerName" text="গ্রাহকের নাম" />
          <Input
            type="text"
            placeholder="গ্রাহকের নাম লিখুন"
            register={register("customerName")}
          />
          {mappedError("customerName") && (
            <p className="text-red-500 text-xs italic">
              {mappedError("customerName")}
            </p>
          )}
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <Label name="mobileNumber" text="মোবাইল নম্বর" />
          <Input
            type="text"
            placeholder="মোবাইল নম্বর লিখুন"
            register={register("mobileNumber")}
          />
          {mappedError("mobileNumber") && (
            <p className="text-red-500 text-xs italic">
              {mappedError("mobileNumber")}
            </p>
          )}
        </div>

        {/* Address */}
        <div className="mb-4">
          <Label name="address" text="ঠিকানা" />
          <Input
            type="text"
            placeholder="ঠিকানা লিখুন"
            register={register("address")}
          />
          {mappedError("address") && (
            <p className="text-red-500 text-xs italic">
              {mappedError("address")}
            </p>
          )}
        </div>

        {/* NID */}
        <div className="mb-4">
          <Label name="nid" text="ভোটার আইডি নাম্বার" />
          <Input
            type="number"
            placeholder="ভোটার আইডি নাম্বার লিখুন"
            register={register("nid", { valueAsNumber: true })}
          />
          {mappedError("nid") && (
            <p className="text-red-500 text-xs italic">{mappedError("nid")}</p>
          )}
        </div>

        {/* Due */}
        <div className="mb-4">
          <Label name="due" text="বাকি (৳)" />
          <Input
            type="number"
            placeholder="বাকি টাকা লিখুন"
            register={register("due", { valueAsNumber: true })}
          />
          {mappedError("due") && (
            <p className="text-red-500 text-xs italic">{mappedError("due")}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          text={`${isLoading ? "যোগ হচ্ছে..." : "গ্রাহক যোগ করুন"}`}
          background="blue"
        />
      </form>
    </div>
  );
};

export default AddCustomer;
