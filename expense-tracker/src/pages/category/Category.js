import { useEffect, useState } from "react";
import AddCategory from "../../components/addCategory/AddCategory";
import CategoryTable from "../../components/categoryTable/CategoryTable";
import "./Category.css";
import { FetchCategories } from "../../api/Api";

const Category = () => {
    const [categories, setCategorys] = useState([]);

    const RefreshCategories = async () =>{
        setCategorys(await FetchCategories());
    }

    useEffect(()=>{
        RefreshCategories();
    },[]);
    return(
        <div className="category-content-container">
            <CategoryTable categories={categories} RefreshCategories={RefreshCategories}/>
            <AddCategory RefreshCategories={RefreshCategories}/>
        </div>
    )
}

export default Category;