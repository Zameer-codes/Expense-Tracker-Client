import { AppstoreOutlined, BankOutlined, BarsOutlined } from "@ant-design/icons";
import { Menu, Layout } from "antd";
import "./SideBar.css";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

function SideBar() {
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    navigate(e.key);
  }

  const items = [
    {
      key: "/",
      label: "Dashboard",
      icon: <AppstoreOutlined />,
    },
    {
      key: "/transactions",
      label: "Transactions",
      icon:<BankOutlined/>
    },
    {
      key: "/categories",
      label: "Categories",
      icon:<BarsOutlined/>
    },
  ];
  return (
    <div className="sidebar-menu-container">
      <Sider collapsed={false} className="sidebar">
        <Menu theme="dark" items={items} className="sidebar-menu" onClick={handleNavigation}/>
      </Sider>
    </div>
  );
}

export default SideBar;
