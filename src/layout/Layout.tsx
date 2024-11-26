import Layout, { Content } from "antd/es/layout/layout";
import React, { useState } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

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
      <Layout hasSider={true}>
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
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
