import { FundOutlined } from "@ant-design/icons";
import { Typography, Space } from "antd";
import "./Header.css";

function Header() {
  return (
      <Space direction="horizontal" align="center" className="header-block">
        <FundOutlined className="header-icon" />
        <Space direction="vertical" size={0}>
          <Typography.Title level={2} style={{margin:"0px"}}>Expense Tracker</Typography.Title>
          <Typography.Text type="secondary">
            Manage Expenses Handy
          </Typography.Text>
        </Space>
      </Space>
  );
}

export default Header;
