import { Layout, Menu } from "antd";
const { Sider } = Layout;
const items = [
  {
    key: "dashboard",
    label: "Dashboard",
  },
  {
    key: "something",
    label: "Something",
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
        Logo
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
