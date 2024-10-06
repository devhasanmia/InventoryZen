import { SubmitHandler, useForm } from "react-hook-form";
import Label from "../../components/ui/Label";
import { useGetAllProductQuery } from "../../redux/api/api";
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

type TProduct = {
  _id: string;
  productName: string;
};

const StockAdjustment = () => {
  const { data } = useGetAllProductQuery(undefined);

  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    console.log(formData);
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold text-gray-700 mb-8 text-center">
        নতুন পণ্যদ্রব্য ক্রয় করুন
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-lg p-6 max-w-screen-lg mx-auto">
        <div className="mb-4">
          <Label name="product" text="পণ্যের নাম" />
          <select
            {...register("product")}
            className="mt-1 focus:ring-2 focus:ring-[#1677ff] block w-full border border-gray-300 rounded-md p-2 focus:outline-none"
          >
            <option value="">পণ্য নির্বাচন করুন</option>
            {data?.data?.map((product: TProduct) => (
              <option key={product._id} value={product._id}>
                {product.productName}
              </option>
            ))}
          </select>
        </div>
        <div className="space-x-5">
          <Label name="quantity" text="পরিমান"/>
        </div>
        {/* Submit Button Start */}
        <Button type="submit" text="পণ্য ক্রয় করুন" background="red" />
        {/* Submit Button End */}
      </form>
    </div>
  );
};

export default StockAdjustment;
