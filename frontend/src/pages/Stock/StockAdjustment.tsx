import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/ui/input";
import Label from "../../components/ui/Label";
import { useGetAllProductQuery } from "../../redux/api/api";
import { useState } from "react";
import Button from "../../components/ui/Button";
type Inputs = {
  product: string;
  quantity: number;
  purchasePrice: number;
  salePrice: number;
  totalPrice: number;
  discount: number;
  dealer: string;
  cashPayment: number;
  due: number;
  extraExpense: number;
};
const StockAdjustment = () => {
  const { data } = useGetAllProductQuery(undefined);
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const [totalPrice, setTotalPrice] = useState(0);
  const handleChange = (e) => {
    console.log(e);
  }
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    setTotalPrice(formData.quantity * formData.salePrice);
    formData.totalPrice = totalPrice;
    console.log(formData);
    reset();
  };
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold text-gray-700 mb-8 text-center">
        স্টক এডজাস্টমেন্ট করুন
      </h1>
      <hr />
      <br />
      {/* Form Component */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto"
      >
        <div className="mb-4">
          <Label name="productName" text="পণ্যের নাম" />
          <select
            className="mt-1 focus:ring-2 focus:ring-[#1677ff] block w-full border border-gray-300 rounded-md p-2 focus:outline-none"
            {...register("product")}
          >
            <option value="">পণ্য নির্বাচন করুন</option>
            {data?.data.map((product) => (
              <option key={product._id} value={product._id}>
                {product.productName}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <Label name="quantity" text="পরিমান" />
          <Input
            type="number"
            placeholder="পরিমান"
            register={register("quantity")}

          />
        </div>
        <div className="mb-4">
          <Label name="purchasePrice" text="ক্রয় মূল্য" />
          <Input
            type="number"
            placeholder="ক্রয় মূল্য লিখুন"
            register={register("purchasePrice")}
          />
        </div>
        <div className="mb-4">
          <Label name="sellingPrice" text="বিক্রয় মূল্য" />
          <Input
            type="number"
            placeholder="বিক্রয় মূল্য"
            register={register("salePrice")}
          />
        </div>
        <div className="mb-4">
          <Label name="totalPrice" text="মোট টাকা" />
          <input
            {...(register("totalPrice") && { value: totalPrice })}
            type="number"
            placeholder="মোট টাকা"
            value={totalPrice}
            className="mt-1 focus:ring-2 focus:ring-[#1677ff] block w-full border border-gray-300 rounded-md p-2 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <Button type="submit" text="Submit" background="blue" />
        </div>
      </form>
    </div>
  );
};

export default StockAdjustment;
