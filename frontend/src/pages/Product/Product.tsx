import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { useGetAllStockQuery } from "../../redux/api/api";
const Product = () => {
  const { data } = useGetAllStockQuery(undefined);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-700">
          পণ্যদ্রব্যের তালিকা
        </h1>
        <Link to="/product/add-product">
          <Button
            type="submit"
            text="+ নতুন পণ্য যুক্ত করুন"
            background="blue"
          />
        </Link>
      </div>
      <hr />
      <br />
      <div>
        <table className="min-w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-6 text-gray-700">ক্রমিক নং</th>
              <th className="py-3 px-6 text-gray-700">SKU</th>
              <th className="py-3 px-6 text-gray-700">পণ্যের নাম</th>
              <th className="py-3 px-6 text-gray-700 text-center">
                বর্তমান বিক্রয় মূল্য
              </th>
              <th className="py-3 px-6 text-gray-700 text-center">
                বর্তমান স্টক
              </th>
              <th className="py-3 px-6 text-gray-700 text-center">ইউনিট</th>
              <th className="py-3 px-6 text-gray-700 text-center">ক্যাটাগরি</th>
              <th className="py-3 px-6 text-gray-700 text-center">ব্র্যান্ড</th>
              <th className="py-3 px-6 text-gray-700 text-center">অ্যাকশন</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((item: any, index: number) => (
              <tr className="border-b">
                <td className="py-4 px-6">{index + 1}</td>
                <td className="py-4 px-6">{item.product.SKU}</td>
                <td className="py-4 px-6">{item.product.productName}</td>
                <td className="py-4 px-6">{item.salePrice} ৳</td>
                <td className="py-4 px-6">{item.quantity}</td>
                <td className="py-4 px-6">{item.product.unit}</td>
                <td className="py-4 px-6">{item.product.productCategory}</td>
                <td className="py-4 px-6">{item.product.productBrand}</td>
                <td className="py-4 px-6 text-center">
                  <Link to={"/"}>
                    <button className="text-blue-500 hover:text-yellow-600 mr-4">
                      <GrView />
                    </button>
                  </Link>
                  <Link to={"/"}>
                    <button className="text-yellow-500 hover:text-yellow-600 mr-4">
                      <FaEdit />
                    </button>
                  </Link>
                  <button className="text-red-500 hover:text-red-600">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
