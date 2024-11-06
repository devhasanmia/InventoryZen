import { useState } from "react";
import { LogoutOutlined } from "@ant-design/icons";
import { RiMenu2Line } from "react-icons/ri";
import { LuPanelRightClose } from "react-icons/lu";
import { Button, Layout } from "antd";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
const { Header, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar collapsed={collapsed} />
      <Layout>
        <Header className="mr-3 flex justify-between items-center shadow-lg p-4 sm:p-6">
          <Button
            type="text"
            icon={collapsed ? <LuPanelRightClose /> : <RiMenu2Line />}
            onClick={() => setCollapsed(!collapsed)}
            className="text-white text-lg w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center transition-colors duration-200 hover:bg-gray-700"
          />
          <div className="flex items-center text-white">
            <span className="hidden sm:block text-lg font-semibold">
              Administrator
            </span>
            <Button
              type="text"
              icon={<LogoutOutlined />}
              className="ml-4 sm:ml-4 text-red-500 hover:text-red-700 transition-colors duration-200"
            >
              <span className="hidden sm:inline">Log Out</span>
            </Button>
          </div>
        </Header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
