import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { PersonaIcon } from "../icons/IconsMenu";
import "./css/SideBar.css";
import { Link } from "react-router-dom";

// Define el tipo de las props que recibe SideBar
interface SideBarProps {
  isCollapsed: boolean;
}

type MenuItem = Required<MenuProps>["items"][number];

const SideBar: React.FC<SideBarProps> = ({ isCollapsed }) => {
  const items: MenuItem[] = [
    { key: "1", icon: <PersonaIcon />, label: <Link to="/">Home</Link> },
    {
      key: "2",
      icon: <PersonaIcon />,
      label: <Link to="/persona">Persona</Link>,
    },
    { key: "3", icon: <PersonaIcon />, label: <Link to="/otros">Otro</Link> },
    {
      key: "sub1",
      label: "Navigation One",
      icon: <PersonaIcon />,
      children: [
        { key: "5", label: "Option 5" },
        { key: "6", label: "Option 6" },
      ],
    },
  ];

  return (
    <Sider width={200} collapsed={isCollapsed} style={{ background: "#fff" }}>
      <Menu mode="inline" items={items} />
    </Sider>
  );
};

export default SideBar;
