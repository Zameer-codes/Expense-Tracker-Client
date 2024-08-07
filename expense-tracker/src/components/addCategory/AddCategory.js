import { Button, FloatButton, Form, Input, message, Select } from "antd";
import "./AddCategory.css";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { CreateCategory } from "../../api/Api";

const AddCategory = ({RefreshCategories}) => {
  const [visible, setVisible] = useState(false);
  // const [categories, setCategories] = useState([]);
  const [form] = Form.useForm();

  const options = [
    {
      label: "Expense",
      value: "Expense",
    },
    {
      label: "Income",
      value: "Income",
    }
  ];

  
  const handleVisibility=()=>{
    setVisible((prev) => !prev);
    form.resetFields();
  }

  const handleSubmitForm = async (values)=>{
    console.log(values);
    const Response = await CreateCategory(values);
    if(Response.status === 201){
        message.success("Category Added Successfully");
        handleVisibility();
    }
    RefreshCategories();
  }


  // useEffect(() => {
  //   const GetCategories = async () => {
  //     setCategories(await FetchCategories());
  //   };
  //   GetCategories();
  // }, []);
  return (
    <div className="add-category-container">
      <FloatButton
        className="float-button"
        onClick={handleVisibility}
        icon={
          <PlusOutlined
            className={`${
              visible ? "form-visible-transform" : "form-hide-transform"
            } float-icon`}
          />
        }
        tooltip="Add Category"
      />

      <Form
        className={`category-form ${visible ? "form-visible" : "form-hide"}`}
        labelCol={{ span: "4" }}
        wrapperCol={{ span: "10" }}
        form={form}
        onFinish={handleSubmitForm}
      >
        <Form.Item
          label="Category"
          name="categoryName"
          rules={[{ required: true, message: "Please enter category" }]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="Type"
          name="type"
          rules={[{ required: true, message: "Please enter type" }]}
        >
          <Select options={options} />
        </Form.Item>
        <Form.Item className="category-form-button">
          <Button style={{ backgroundColor: "#3dad5b", color: "white" }} htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCategory;
