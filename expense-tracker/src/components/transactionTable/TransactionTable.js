import { Table } from "antd";
import "./TransactionTable.css";

const columns = [
  {
    title: "Category",
    dataIndex: "categoryName",
    key: "categoryName",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    render:(children)=>{
      return children === "Income"?<span style={{color:"green"}}>{children}</span>:<span style={{color:"red"}}>{children}</span>;
    }
  },
  {
    title: "Amount ($)",
    dataIndex: "amount",
    key: "amount",
  },
];

const TransactionTable = ({transactions}) => {

  return (
    <div className="transaction-table-container">
      <Table
        columns={columns}
        dataSource={transactions}
        rowKey="transactionId"
        pagination={{
          pageSize: 8,
        }}
        size="small"
      />
    </div>
  );
};

export default TransactionTable;
