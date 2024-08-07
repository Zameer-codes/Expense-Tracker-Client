import axios from "axios";

export const FetchTransactions = async () => {
  const Response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/transactions/get`
  );
  return Response.data;
};

export const FetchCategories = async () => {
  const Response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/categories/get`);
  return Response.data;
};

export const  CreateTransaction = async(transaction)=>{
  const Response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/transaction/add`,transaction);
  return Response;
}

export const  CreateCategory = async(category)=>{
  const Response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/category/add`,category);
  return Response;
}

export const DeleteCategory = async(categoryId) => {
  const Response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/category/delete/${categoryId}`);
  return Response;
}