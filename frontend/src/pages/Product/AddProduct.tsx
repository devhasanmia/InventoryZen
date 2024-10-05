import { SubmitHandler, useForm } from "react-hook-form";
import Label from "../../components/ui/Label";
import Input from "../../components/ui/input";
import Button from "../../components/ui/Button";
import { useAddProductMutation, useGetAllCategoryQuery } from "../../redux/api/api";

type TUnit =
  | "পিস"
  | "কেজি"
  | "মণ"
  | "গ্রাম"
  | "টন"
  | "লিটার"
  | "মিলিলিটার"
  | "ডজন"
  | "গজ"
  | "মিটার"
  | "সেন্টিমিটার"
  | "ইঞ্চি"
  | "ফুট"
  | "কোয়ার্টার"
  | "পাউন্ড"
  | "আউন্স"
  | "মিলিগ্রাম"
  | "কিউবিক মিটার"
  | "গ্যালন"
  | "কুইন্টাল"
  | "বারেল"
  | "প্যাকেট"
  | "বোতল";

const units: TUnit[] = [
  "পিস",
  "কেজি",
  "মণ",
  "গ্রাম",
  "টন",
  "লিটার",
  "মিলিলিটার",
  "ডজন",
  "গজ",
  "মিটার",
  "সেন্টিমিটার",
  "ইঞ্চি",
  "ফুট",
  "কোয়ার্টার",
  "পাউন্ড",
  "আউন্স",
  "মিলিগ্রাম",
  "কিউবিক মিটার",
  "গ্যালন",
  "কুইন্টাল",
  "বারেল",
  "প্যাকেট",
  "বোতল",
];

type Inputs = {
  productName: string;
  productBrand: string;
  productCategory: string;
  unit: TUnit;
  SKU: string;
};

const AddProduct = () => {

  const generateSKU = (): string => {
    const randomId = Math.random().toString(36).substring(2, 8).toUpperCase()
    return `SP-${randomId}`;
  };

  const { register, handleSubmit, reset } = useForm<Inputs>();
  
  const {
    data: categories,
    isLoading,
    isError,
  } = useGetAllCategoryQuery(undefined);
  
  const [addProduct] = useAddProductMutation()

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    addProduct(formData);
    reset();
  };
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold text-gray-700 mb-8 text-center">
        নতুন পণ্যদ্রব্য ক্রয় করুন
      </h1>
      <hr />
      <br />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto"
      >
        {/* Product Name */}
        <div className="mb-4">
          <Label name="productName" text="পণ্যের নাম" />
          <Input
            type="text"
            placeholder="পণ্যের নাম লিখুন"
            register={register("productName")}
          />
        </div>

        {/* Product Brand */}
        <div className="mb-4">
          <Label name="productBrand" text="পণ্যের ব্র্যান্ড" />
          <Input
            type="text"
            placeholder="পণ্যের ব্র্যান্ড লিখুন"
            register={register("productBrand")}
          />
        </div>

        {/* Product Category */}
        <div className="mb-4">
          <Label name="productCategory" text="পণ্যের ক্যাটাগরি" />
          <select
            {...register("productCategory")}
            className="mt-1 focus:ring-2 focus:ring-[#1677ff] block w-full border border-gray-300 rounded-md p-2 focus:outline-none"
          >
            <option value="">ক্যাটাগরি নির্বাচন করুন</option>
            {isLoading && <option>লোড হচ্ছে...</option>}
            {isError && <option>ক্যাটাগরি লোড করতে ব্যর্থ হয়েছে</option>}
            {categories &&
              categories.data.map((category: any) => (
                <option key={category._id} value={category.categoryName}>
                  {category.categoryName}
                </option>
              ))}
          </select>
        </div>
        <div className="mb-4">
          {/* Unit */}
          <Label name="unit" text="ইউনিট" />
          <select
            {...register("unit")}
            className="mt-1 focus:ring-2 focus:ring-[#1677ff] block w-full border border-gray-300 rounded-md p-2 focus:outline-none"
          >
            <option value="">একক নির্বাচন করুন</option>
            {units.map((unit: TUnit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <Label name="SKU" text="SKU"/>
          <input className="mt-1 focus:ring-2 focus:ring-[#1677ff] block w-full border border-gray-300 rounded-md p-2 focus:outline-none" type="text"{...register("SKU")} value={generateSKU()}/>
        </div>
        {/* Submit Button */}
        <Button type="submit" text="ক্রয় করুন" background="red" />
      </form>
    </div>
  );
};

export default AddProduct;
