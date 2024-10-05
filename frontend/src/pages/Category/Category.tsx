import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetAllCategoryQuery } from "../../redux/api/api";
import Swal from "sweetalert2";
import Button from "../../components/ui/Button";

interface CategoryType {
  _id: string;
  categoryName: string;
}

const Category = () => {
  const {
    data: categories,
    isError,
    isLoading,
    error,
  } = useGetAllCategoryQuery(undefined);

  const handleDelete = (_id: string) => {
    Swal.fire({
      title: "আপনি কি নিশ্চিত?",
      text: "এই ক্যাটেগরি মুছে ফেলা হবে!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "হ্যাঁ, মুছে ফেলুন!",
      cancelButtonText: "বাতিল করুন",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("মুছে ফেলা হয়েছে!", "ক্যাটেগরি মুছে ফেলা হয়েছে।", "success");
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-700">
          ক্যাটেগরির তালিকা
        </h1>
        <Link to="/category/add-category">
          <Button
            type="submit"
            background="blue"
            text=" + নতুন ক্যাটেগরি যুক্ত করুন "
          />
        </Link>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center items-center">
          <p>লোড হচ্ছে...</p>
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="flex justify-center items-center">
          <p>কিছু ত্রুটি ঘটেছে: {JSON.stringify(error)}</p>
        </div>
      )}

      {/* Category Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-6 text-gray-700">ক্রমিক নং</th>
              <th className="py-3 px-6 text-gray-700">ক্যাটেগরির নাম</th>
              <th className="py-3 px-6 text-gray-700 text-center">অ্যাকশন</th>
            </tr>
          </thead>
          <tbody>
            {categories?.data?.map((category: CategoryType, index: number) => (
              <tr key={category._id} className="border-b">
                <td className="py-4 px-6">{index + 1}</td>
                <td className="py-4 px-6">{category.categoryName}</td>
                <td className="py-4 px-6 text-center">
                  <Link to={`/category/edit-category/${category._id}`}>
                    <button className="text-yellow-500 hover:text-yellow-600 mr-4">
                      <FaEdit />
                    </button>
                  </Link>
                  <button
                    className="text-red-500 hover:text-red-600"
                    onClick={() => handleDelete(category._id)}
                  >
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

export default Category;
