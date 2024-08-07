import {Routes, Route} from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Transaction from "../pages/transaction/Transaction";
import Category from "../pages/category/Category";
function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/transactions" element={<Transaction/>}/>
            <Route path="/categories" element={<Category/>}/>
        </Routes>
    )
}

export default AppRoutes;