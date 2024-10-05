import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";

const Product = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-700">
        পণ্যদ্রব্যের তালিকা
        </h1>
        <Link to="/product/add-product">
        <Button type="submit" text="+ নতুন পণ্য যুক্ত করুন" background="blue"/>
        </Link>
      </div>
      <hr />

    </div>
  );
};

export default Product;
