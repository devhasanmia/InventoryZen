import { Layout } from "antd";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header></Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <h1 className=" font-bold tracking-tight">
            © ২০২৪ <span>ইনভেন্টরি</span>
            <span className="text-[#1677ff] ml-2 animate-bounce">জেন. </span>
            সর্বস্বত্ব সংরক্ষিত.
          </h1>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
