import { Button, FloatButton, Form, Input, message, Select } from "antd";
import "./AddTransaction.css";
import { PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { CreateTransaction, FetchCategories } from "../../api/Api";

const AddTransaction = ({RefreshTransactions}) => {
  const [visible, setVisible] = useState(false);
  const [categories, setCategories] = useState([]);
  const [form] = Form.useForm();

  const options = [
    ...categories.map((category) => ({
      label: category.categoryName,
      value: category.categoryId,
    })),
  ];

  
  const handleVisibility=()=>{
    setVisible((prev) => !prev);
    form.resetFields();
  }

  const handleSubmitForm = async (values)=>{
    console.log(values);
    const Response = await CreateTransaction(values);
    if(Response.status === 201){
        message.success("Transaction Added Successfully");
        handleVisibility();
    }
    RefreshTransactions();
  }


  useEffect(() => {
    const GetCategories = async () => {
      setCategories(await FetchCategories());
    };
    GetCategories();
  }, []);
  return (
    <div className="add-transaction-container">
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
        tooltip="Add Transaction"
      />

      <Form
        className={`transaction-form ${visible ? "form-visible" : "form-hide"}`}
        labelCol={{ span: "4" }}
        wrapperCol={{ span: "10" }}
        form={form}
        onFinish={handleSubmitForm}
      >
        <Form.Item
          label="Amount"
          name="amount"
          rules={[{ required: true, message: "Please enter amount" }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Category"
          name="categoryId"
          rules={[{ required: true, message: "Please enter amount" }]}
        >
          <Select options={options} />
        </Form.Item>
        <Form.Item className="transaction-form-button">
          <Button style={{ backgroundColor: "#3dad5b", color: "white" }} htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddTransaction;
