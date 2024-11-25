import React, { useState } from "react";
import Layout, { Content } from "antd/es/layout/layout";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { Skeleton } from "antd";

// Define el tipo para las props de MainLayout
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  // Función para alternar el colapso
  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar onToggleSidebar={toggleSidebar} isCollapsed={isCollapsed} />
      <Layout>
        <SideBar isCollapsed={isCollapsed} />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: "#fff",
            }}
          >
            {children || <Skeleton active />}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
