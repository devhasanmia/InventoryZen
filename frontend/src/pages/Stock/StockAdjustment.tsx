import { SubmitHandler, useForm } from "react-hook-form";
import Label from "../../components/ui/Label";
import {
  useAddStockMutation,
  useGetAllProductQuery,
} from "../../redux/api/api";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/input";
import { useEffect, useState } from "react";

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
};

type TProduct = {
  _id: string;
  productName: string;
};

const StockAdjustment = () => {
  const { data } = useGetAllProductQuery(undefined);
  const [addStock] = useAddStockMutation();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  
  const [totalPrice, setTotalPrice] = useState(0);
  const [duePayment, setDuePayment] = useState(0);
  const quantity = watch("quantity");
  const purchasePrice = watch("purchasePrice");
  const discount = watch("discount");
  const cashPayment = watch("cashPayment");
  useEffect(() => {
    if (quantity && purchasePrice) {
      setTotalPrice(quantity * purchasePrice - discount);
    } else {
      setTotalPrice(0);
    }
  }, [quantity, purchasePrice, discount]);

  useEffect(() => {
    if (totalPrice && cashPayment) {
      setDuePayment(totalPrice - cashPayment);
    } else {
      setDuePayment(0);
    }
  }, [totalPrice, cashPayment]);

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const data = {
      ...formData,
      quantity: Number(formData.quantity),
      purchasePrice: Number(formData.purchasePrice),
      discount: Number(formData.discount),
      salePrice: Number(formData.salePrice),
      cashPayment: Number(formData.cashPayment),
      due: Number(formData.due),
      totalPrice: Number(formData.totalPrice),
    };
    addStock(data);
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold text-gray-700 mb-8 text-center">
        নতুন পণ্যদ্রব্য ক্রয় করুন
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-lg p-6 max-w-screen-lg mx-auto"
      >
        {/* Product Field */}
        <div className="mb-4">
          <Label name="product" text="পণ্যের নাম" />
          <select
            {...register("product", { required: "পণ্য নির্বাচন প্রয়োজন" })}
            className="mt-1 focus:ring-2 focus:ring-[#1677ff] block w-full border border-gray-300 rounded-md p-2 focus:outline-none"
          >
            <option value="">পণ্য নির্বাচন করুন</option>
            {data?.data?.map((product: TProduct) => (
              <option key={product._id} value={product._id}>
                {product.productName}
              </option>
            ))}
          </select>
          {errors.product && (
            <span className="text-red-500">{errors.product.message}</span>
          )}
        </div>

        {/* Quantity Field */}
        <div className="mb-4">
          <Label name="quantity" text="পরিমান" />
          <Input
            type="number"
            placeholder="পরিমান"
            register={register("quantity", { required: "পরিমান প্রয়োজন" })}
          />
          {errors.quantity && (
            <span className="text-red-500">{errors.quantity.message}</span>
          )}
        </div>

        {/* Purchase Price Field */}
        <div className="mb-4">
          <Label name="purchasePrice" text="ক্রয় মূল্য" />
          <Input
            type="number"
            placeholder="ক্রয় মূল্যে"
            register={register("purchasePrice", {
              required: "ক্রয় মূল্য প্রয়োজন",
            })}
          />
          {errors.purchasePrice && (
            <span className="text-red-500">{errors.purchasePrice.message}</span>
          )}
        </div>

        {/* Sale Price Field */}
        <div className="mb-4">
          <Label name="salePrice" text="বিক্রয় মূল্যে" />
          <Input
            type="number"
            placeholder="বিক্রয় মূল্যে"
            register={register("salePrice", {
              required: "বিক্রয় মূল্য প্রয়োজন",
            })}
          />
          {errors.salePrice && (
            <span className="text-red-500">{errors.salePrice.message}</span>
          )}
        </div>

        {/* Total Price Field */}
        <div className="mb-4">
          <Label name="totalPrice" text="মোট টাকার পরিমান" />
          <input
            className="mt-1 focus:ring-2 focus:ring-pink-500 block w-full border border-gray-300 rounded-md p-2 focus:outline-none"
            type="number"
            {...register("totalPrice")}
            readOnly
            placeholder="মোট টাকার পরিমান"
            value={totalPrice}
          />
        </div>

        {/* Discount Field */}
        <div className="mb-4">
          <Label name="discount" text="ছাড়" />
          <Input
            type="number"
            placeholder="ছাড়"
            register={register("discount")}
          />
        </div>

        {/* Dealer Field */}
        <div className="mb-4">
          <Label name="dealer" text="ডিলার" />
          <Input
            type="text"
            placeholder="ডিলার"
            register={register("dealer", { required: "ডিলার প্রয়োজন" })}
          />
          {errors.dealer && (
            <span className="text-red-500">{errors.dealer.message}</span>
          )}
        </div>

        {/* Cash Payment Field */}
        <div className="mb-4">
          <Label name="cashPayment" text="ক্যাশ দিলাম" />
          <Input
            type="number"
            placeholder="ক্যাশ দিলাম"
            register={register("cashPayment", {
              required: "ক্যাশ পরিমাণ প্রয়োজন",
            })}
          />
          {errors.cashPayment && (
            <span className="text-red-500">{errors.cashPayment.message}</span>
          )}
        </div>

        {/* Due Field */}
        <div className="mb-4">
          <Label name="due" text="বাকি থাকবে" />
          <input
            {...register("due")}
            className="mt-1 focus:ring-2 focus:ring-pink-500 block w-full border border-gray-300 rounded-md p-2 focus:outline-none"
            type="number"
            value={duePayment}
            readOnly
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" text="পণ্য ক্রয় করুন" background="red" />
      </form>
    </div>
  );
};

export default StockAdjustment;
