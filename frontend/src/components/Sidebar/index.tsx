import { Layout, Menu } from "antd";
import { items } from "./MenuItems";
import { Link } from "react-router-dom";
const { Sider } = Layout;

const Sidebar = ({ collapsed }: { collapsed: boolean }) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{ background: "#001529"}}
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
        <Link to={"/dashboard"}>
          {" "}
          <span
            className={`text-white font-semibold ${
              collapsed ? "text-lg" : "text-xl"
            } tracking-wide`}
          >
            {collapsed ? "IZen" : "InventoryZen"}
          </span>
        </Link>
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
