import { Layout, Menu } from "antd";

const { Sider } = Layout;

import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUnorderedList,
  AiOutlineRollback,
  AiOutlineStock,
  AiOutlineTeam,
  AiOutlineUser,
  AiOutlineFileText,
  AiOutlineDollarCircle,
  AiOutlinePieChart,
  AiOutlineIdcard,
  AiOutlineSetting,
  AiOutlineBarChart,
  AiOutlineAlert,
  AiOutlineAppstore,
  AiOutlineSolution,
  AiOutlineAudit,
  AiOutlineDatabase,
} from "react-icons/ai";

const items = [
  {
    key: "dashboard",
    icon: <AiOutlineDashboard />,
    label: "ড্যাশবোর্ড",
  },
  {
    key: "sale",
    icon: <AiOutlineShoppingCart />,
    label: "নতুন বিক্রি",
  },
  {
    key: "product-list",
    icon: <AiOutlineUnorderedList />,
    label: "মালামালের তালিকা",
  },

  {
    key: "return-list",
    icon: <AiOutlineRollback />,
    label: "পন্য রিটার্নের তালিকা",
  },
  {
    key: "stock-alerts",
    icon: <AiOutlineAlert />,
    label: "স্টক সতর্কতা",
  },
  {
    key: "stock-adjustment",
    icon: <AiOutlineStock />,
    label: "স্টক এডজাস্টমেন্ট",
  },

  {
    key: "product-categories",
    icon: <AiOutlineAppstore />,
    label: "পণ্যের বিভাগ",
  },
  {
    key: "dealer-list",
    icon: <AiOutlineTeam />,
    label: "ডিলার তালিকা",
  },
  {
    key: "customers-list",
    icon: <AiOutlineUser />,
    label: "গ্রাহকগণের তালিকা",
  },
  {
    key: "customer-due-report",
    icon: <AiOutlineFileText />,
    label: "গ্রাহক বাকি হিসাব",
  },
  {
    key: "expense-report",
    icon: <AiOutlineDollarCircle />,
    label: "খরচের হিসাব",
  },
  {
    key: "profit-report",
    icon: <AiOutlinePieChart />,
    label: "অন্যান্য আয়ের হিসাব",
  },
  {
    key: "employee-management",
    icon: <AiOutlineIdcard />,
    label: "কর্মচারী ব্যবস্থাপনা",
  },

  {
    key: "data-backup",
    icon: <AiOutlineDatabase />,
    label: "ডাটা ব্যাকআপ",
  },
  {
    key: "users",
    icon: <AiOutlineUser />,
    label: "ব্যবহারকারী",
  },
  {
    key: "setting",
    icon: <AiOutlineSetting />,
    label: "সেটিংস",
  },
];

const Sidebar = ({ collapsed }: { collapsed: boolean }) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{ background: "#001529" }}
    >
      <div
        style={{
          height: "32px",
          margin: "16px",
          textAlign: "center",
          color: "#fff",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        <span className="text-green-100 font-bold text-4xl">IZen</span>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
