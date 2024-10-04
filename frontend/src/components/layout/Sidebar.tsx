import { Layout, Menu } from "antd";
import { Link, NavLink } from "react-router-dom";
const { Sider } = Layout;

const items = [
  {
    label: <NavLink to="/dashboard">ড্যাশবোর্ড</NavLink>,
    key: "dashboard",
  },
  {
    label: "গ্রাহক",
    key: "customer",
    children: [
      {
        label: <NavLink to={"/customer"}>গ্রাহকের তালিকা</NavLink>,
        key: "customer",
      },
      {
        label: <NavLink to={"/customer/add-customer"}>নতুন গ্রাহক যুক্ত</NavLink>,
        key: "add-customer",
      },
    ],
  },
  {
    label: "পণ্য",
    key: "Products",
    children: [
      { label: "নতুন ক্রয়", key: "new-purchase" },
      { label: "নতুন বিক্রয়", key: "new-sale" },
    ],
  },
  {
    label: "স্টক এডজাস্টমেন্ট",
    key: "stock-adjustment",
  },
];
const Sidebar = () => {
  return (
    <Sider>
      <div
        style={{
          color: "white",
          textAlign: "center",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <h1 className="text-2xl font-bold tracking-tight">
            <span>ইনভেন্টরি</span>
            <span className="text-[#1677ff] ml-2 animate-bounce">জেন.</span>
          </h1>
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;

//   children: [
//     { label: "Dashboard 1", key: "11" },
//     { label: "Dashboard 2", key: "12" },
//     { label: "Dashboard 3", key: "13" },
//   ],
