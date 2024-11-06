import { Modal, Space, Table } from "antd";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import {
  useDeleteCustomerMutation,
  useGetAllCustomersQuery,
  useUpdateCustomerInfoMutation,
} from "../../redux/features/customer/customerApi";
import { GrView } from "react-icons/gr";
import { useEffect, useState } from "react";
import { TCustomer } from "../../types";
import { toast } from "sonner";
import { useForm } from "react-hook-form";

const Customer = () => {
  const { data: customers, isFetching } = useGetAllCustomersQuery("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [deleteCustomer] = useDeleteCustomerMutation();
  const [selectedCustomer, setSelectedCustomer] = useState<TCustomer | null>(
    null
  );
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      customerName: "",
      mobileNumber: "",
      address: "",
      nid: 0,
      due: 0,
    },
  });

  useEffect(() => {
    if (selectedCustomer) {
      reset({
        customerName: selectedCustomer.customerName || "",
        mobileNumber: selectedCustomer.mobileNumber || "",
        address: selectedCustomer.address || "",
        nid: selectedCustomer.nid || 0,
        due: selectedCustomer.due || 0,
      });
    }
  }, [selectedCustomer, reset]);
  const [updateCustomerData] = useUpdateCustomerInfoMutation();
  const onSubmit = async (data: any) => {
    const { customerName, mobileNumber, address, nid, due } = data;
    const updatedCustomer: TCustomer = {
      customerName,
      mobileNumber,
      address,
      nid: Number(nid),
      due: Number(due),
      _id: "",
    };
    if (selectedCustomer) {
      try {
        const res = await updateCustomerData({
          ...updatedCustomer,
          _id: selectedCustomer._id,
        }).unwrap();

        toast.success(
          res?.message || "গ্রাহকের তথ্য সফলভাবে আপডেট করা হয়েছে।"
        );
      } catch (error: any) {
        toast.error(
          error?.data?.message || "গ্রাহকের তথ্য আপডেট করতে সমস্যা হয়েছে"
        );
      } finally {
        setIsEditModalOpen(false);
        setSelectedCustomer(null);
      }
    }
  };

  const handleDeleteConfirm = (customer: TCustomer) => {
    setSelectedCustomer(customer);
    setIsDeleteConfirmOpen(true);
  };

  const handleDeleteCustomer = async () => {
    if (selectedCustomer) {
      try {
        const res = await deleteCustomer(selectedCustomer._id).unwrap();
        toast.success(res?.message || "গ্রাহকটি সফলভাবে মুছে ফেলা হয়েছে।");
      } catch (error: any) {
        toast.error(error?.data?.message || "গ্রাহক মুছতে সমস্যা হয়েছে");
      } finally {
        setIsDeleteConfirmOpen(false);
        setSelectedCustomer(null);
      }
    }
  };

  const showModal = (customer: TCustomer) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
  };

  const showEditModal = (customer: TCustomer) => {
    setSelectedCustomer(customer);
    setIsEditModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsDeleteConfirmOpen(false);
    setIsEditModalOpen(false);
    setSelectedCustomer(null);
  };

  const columns = [
    {
      title: "নাম",
      dataIndex: "customerName",
      key: "customerName",
      width: 150,
      ellipsis: true,
    },
    {
      title: "মোবাইল নং",
      dataIndex: "mobileNumber",
      key: "mobileNumber",
      width: 130,
      ellipsis: true,
    },
    {
      title: "ঠিকানা",
      dataIndex: "address",
      key: "address",
      width: 200,
      ellipsis: true,
    },
    {
      title: "এন.আই.ডি",
      dataIndex: "nid",
      key: "nid",
      width: 120,
      ellipsis: true,
    },
    {
      title: "বকেয়া",
      dataIndex: "due",
      key: "due",
      width: 80,
      ellipsis: true,
      render: (due: number) => (
        <div>
          {due.toLocaleString("bn-BD", {
            style: "currency",
            currency: "BDT",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>
      ),
    },
    {
      title: "Action",
      key: "action",
      width: 120,
      render: (_: any, record: TCustomer) => (
        <Space size="small" className="flex justify-center items-center">
          <button
            onClick={() => showModal(record)}
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95"
            aria-label="View customer details"
          >
            <GrView fontSize={20} />
          </button>
          <button
            onClick={() => showEditModal(record)}
            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-md transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95"
            aria-label="Edit customer details"
          >
            <FaEdit fontSize={20} />
          </button>
          <button
            onClick={() => handleDeleteConfirm(record)}
            className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-md transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95"
            aria-label="Delete customer"
          >
            <MdDelete fontSize={20} />
          </button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-4">
      {/* View Customer Modal */}
      <Modal
        title="গ্রাহক বিস্তারিত"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={900}
      >
        {selectedCustomer ? (
          <div className="space-y-4">
            <div className="flex justify-between">
              <strong>নাম:</strong>
              <span>{selectedCustomer.customerName}</span>
            </div>
            <div className="flex justify-between">
              <strong>মোবাইল নং:</strong>
              <span>{selectedCustomer.mobileNumber}</span>
            </div>
            <div className="flex justify-between">
              <strong>ঠিকানা:</strong>
              <span>{selectedCustomer.address}</span>
            </div>
            <div className="flex justify-between">
              <strong>এন.আই.ডি:</strong>
              <span>{selectedCustomer.nid}</span>
            </div>
            <div className="flex justify-between">
              <strong>বকেয়া পরিমাণ:</strong>
              <span className="text-2xl font-semibold">
                {selectedCustomer.due.toLocaleString("bn-BD", {
                  style: "currency",
                  currency: "BDT",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
          </div>
        ) : (
          <p>গ্রাহক বিস্তারিত লোড হচ্ছে...</p>
        )}
      </Modal>

      {/* Edit Customer Modal */}

      <Modal
        title="গ্রাহকের তথ্য হালনাগাদ করুন"
        open={isEditModalOpen}
        onCancel={() => setIsEditModalOpen(false)}
        footer={null}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register("customerName")}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="নাম"
            />
          </div>
          <div>
            <input
              {...register("mobileNumber")}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="মোবাইল নং"
            />
          </div>
          <div>
            <input
              {...register("address")}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ঠিকানা"
            />
          </div>
          <div>
            <input
              {...register("nid")}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="এন.আই.ডি"
            />
          </div>
          <div>
            <input
              {...register("due")}
              type="number"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="বকেয়া"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full mt-4 bg-emerald-400 text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition duration-300"
            >
              হালনাগাদ করুন
            </button>
          </div>
        </form>
      </Modal>

      {/* Confirm Delete Modal */}
      <Modal
        title="আপনি কি নিশ্চিত?"
        open={isDeleteConfirmOpen}
        onOk={handleDeleteCustomer}
        onCancel={handleCancel}
        okText="হ্যাঁ, মুছুন"
        cancelText="বাতিল করুন"
        okButtonProps={{ danger: true }}
      >
        <p>গ্রাহক মুছে ফেলতে আপনি কি নিশ্চিত?</p>
      </Modal>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-gray-900">গ্রাহকের তালিকা</h2>
        <h2 className="text-xl font-medium text-gray-600 mt-2 md:mt-0">
          মোট{" "}
          <span className="text-blue-600 font-bold">
            ({customers?.data?.length || 0})
          </span>{" "}
          জন গ্রাহক
        </h2>
      </div>

      {/* Customer Table */}
      <Table
        dataSource={customers?.data}
        columns={columns}
        pagination={{ pageSize: 10 }}
        scroll={{ x: 600 }}
        className="overflow-x-auto"
        loading={isFetching}
      />
    </div>
  );
};

export default Customer;
