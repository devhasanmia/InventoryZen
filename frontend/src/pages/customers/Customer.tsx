import { Button, Space, Table } from "antd";
import { MdDelete, MdEdit } from "react-icons/md";

const Customer = () => {
  const dataSource = [
    {
      key: "1",
      customerName: "MD. MONIRUL ISLAM",
      mobileNumber: "01317067123",
      address: "চন্দ্রপুর, পাবনাপাড়া",
      nid: 6456067419,
      due: 40,
    },
    {
      key: "2",
      customerName: "SARA KHAN",
      mobileNumber: "01316057234",
      address: "ঢাকা, মিরপুর",
      nid: 1234567890,
      due: 20,
    },
  ];

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
    },
    {
      title: "Action",
      key: "action",
      width: 100,
      render: (_: any, _record: any) => (
        <Space size="small" className="flex justify-center items-center">
          <Button
            icon={<MdEdit />}
            className="text-white-600 hover:text-white-800 transition duration-200 font-semibold bg-blue-600"
          />
          <Button
            icon={<MdDelete />}
            className="text-red-500 hover:text-red-700 transition duration-200"
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="p-4 ">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 5 }}
        scroll={{ x: 600 }}
        className="overflow-x-auto"
        loading={true}
      />
    </div>
  );
};

export default Customer;
