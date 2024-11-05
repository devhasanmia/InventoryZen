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
        label: (
          <NavLink to={"/customer/add-customer"}>নতুন গ্রাহক যুক্ত</NavLink>
        ),
        key: "add-customer",
      },
    ],
  },
  {
    label: "পণ্য",
    key: "Products",
    children: [
      {
        label: <NavLink to={"/product"}>পণ্যদ্রব্যের তালিকা</NavLink>,
      },
      {
        label: (
          <NavLink to={"/product/add-product"}>পণ্যদ্রব্যে ক্রয় করুন</NavLink>
        ),
        key: "add-product",
      },
      { label: <NavLink to={"/sale"}>Sale</NavLink>
        , key: "sale" },
    ],
  },
  {
    label: <NavLink to={"/stock-adjustment"}>স্টক এডজাস্টমেন্ট</NavLink>,
    key: "stock-adjustment",
  },
  {
    label: <NavLink to={"/category"}>ক্যাটাগরি</NavLink>,
    key: "category",
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
            <span className="text-[#ffb703] ml-2 animate-bounce">জেন.</span>
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
