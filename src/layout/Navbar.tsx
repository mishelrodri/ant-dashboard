import { Header } from "antd/es/layout/layout";
import "./css/Navbar.css";
// Define el tipo de las props que recibe Navbar
interface NavbarProps {
  onToggleSidebar: () => void;
  isCollapsed: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar, isCollapsed }) => {
  return (
    <Header className="nav-header">
      <button
        className={
          isCollapsed ? "checked button-hamburger" : "button-hamburger"
        }
        onClick={onToggleSidebar}
      >
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
      </button>
    </Header>
  );
};

export default Navbar;
