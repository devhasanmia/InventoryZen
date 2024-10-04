import { FaUsers, FaMoneyBillWave } from "react-icons/fa";
import { useGetAllCustomerQuery } from "../redux/api/api";
import Loading from "../utils/Loading";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
// import ReactApexChart from "apexcharts";

type TSeries = {
  options: ApexOptions;
  series: { name: string; data: number[] }[];
};

const Dashboard = () => {
  const { data } = useGetAllCustomerQuery(undefined);
  if (!data) return <Loading></Loading>;
  const totalDue = data.data?.reduce(
    (acc: any, curr: any) => acc + curr.due,
    0
  );
  const series: TSeries = {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };
  

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6">
        {/* Total Customers */}
        <div className="bg-green-500 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="flex items-center justify-between">
            <h1 className="font-medium text-lg mb-2">সর্বমোট গ্রাহক</h1>
            <FaUsers className="text-3xl text-white" />
          </div>
          <p className="text-3xl font-semibold">{data.data?.length} জন</p>
        </div>

        {/* Total Due */}
        <div className="bg-red-500 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="flex items-center justify-between">
            <h1 className="font-medium text-lg mb-2">মোট বাকি</h1>
            <FaMoneyBillWave className="text-3xl text-white" />
          </div>
          <p className="text-3xl font-semibold">{totalDue} টাকা</p>
        </div>

        {/* Revenue Collected */}
        <div className="bg-indigo-500 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="flex items-center justify-between">
            <h1 className="font-medium text-lg mb-2">সর্বমোট আয়</h1>
            <FaMoneyBillWave className="text-3xl text-white" />
          </div>
          <p className="text-3xl font-semibold">১৫,০০০ টাকা</p>
        </div>
      </div>
      <div className="container m-auto">
        <ReactApexChart
          options={series.options}
          series={series.series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default Dashboard;
