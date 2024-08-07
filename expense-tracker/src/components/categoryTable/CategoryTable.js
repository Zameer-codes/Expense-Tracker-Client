import { message, Table } from "antd";
import "./CategoryTable.css";
import {DeleteOutlined} from "@ant-design/icons";
import {DeleteCategory} from "../../api/Api.js";



const CategoryTable = ({categories, RefreshCategories}) => {

    const handleDeleteCategory = async(record) => {
      const Response = await DeleteCategory(record.categoryId);
      if(Response.status === 200){
        message.success("Category deleted successfully");
      }
      RefreshCategories();
    };

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
          title:"Action",
          key:"action",
          width:"50px",
          render:(_, record)=>(
              <DeleteOutlined onClick={()=>handleDeleteCategory(record)}/>
          )
        }
      ];

  return (
    <div className="category-table-container">
      <Table
        columns={columns}
        dataSource={categories}
        rowKey="categoryId"
        pagination={{
          pageSize: 8,
        }}
        size="small"
      />
    </div>
  );
};

export default CategoryTable;
