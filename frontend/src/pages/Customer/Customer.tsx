import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useGetAllCustomerQuery } from "../../redux/api/api";
import Loading from "../../utils/Loading";
import { Link } from "react-router-dom";

const Customer = () => {
  const { data } = useGetAllCustomerQuery(undefined);
  if (!data) return <Loading></Loading>;
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-700">
          গ্রাহকের তালিকা
        </h1>
        <Link to="/customer/add-customer">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            + নতুন গ্রাহক যুক্ত করুন
          </button>
        </Link>
      </div>
      {/* Customer Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-6 text-gray-700">ক্রমিক নং</th>
              <th className="py-3 px-6 text-gray-700">গ্রাহকের নাম</th>
              <th className="py-3 px-6 text-gray-700">মোবাইল নম্বর</th>
              <th className="py-3 px-6 text-gray-700">ঠিকানা</th>
              <th className="py-3 px-6 text-gray-700">ভোটার আইডি নাম্বার</th>
              <th className="py-3 px-6 text-gray-700">বাকি (৳)</th>
              <th className="py-3 px-6 text-gray-700 text-center">অ্যাকশন</th>
            </tr>
          </thead>
          <tbody>
            {data.data?.map((customer: any, index: any) => (
              <tr key={customer.id} className="border-b">
                <td className="py-4 px-6">{index + 1}</td>
                <td className="py-4 px-6">{customer.customerName}</td>
                <td className="py-4 px-6">{customer.mobileNumber}</td>
                <td className="py-4 px-6">{customer.address}</td>
                <td className="py-4 px-6">
                  {customer.nid === 0 ? "N/A" : customer.nid}
                </td>
                <td className="py-4 px-6">{customer.due}</td>
                <td className="py-4 px-6 text-center">
                  <button className="text-yellow-500 hover:text-yellow-600 mr-4">
                    <FaEdit />
                  </button>
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

export default Customer;
//   const customers = [
//     {
//       id: 1,
//       customerName: 'John Doe',
//       mobileNumber: '0123456789',
//       address: '123 Main St, Dhaka',
//       nid: 1234567890123,
//       due: 500,
//     },
//     {
//       id: 2,
//       customerName: 'Jane Smith',
//       mobileNumber: '0987654321',
//       address: '456 Another St, Chittagong',
//       nid: 9876543210123,
//       due: 200,
//     },

// Add more customer data as needed
//   ];
