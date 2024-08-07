import { useEffect, useState } from "react";
import SplineChart from "../../components/charts/SplineChart";
import { FetchTransactions } from "../../api/Api";

function Dashboard(){
    const [transactions, setTransactions] = useState([]);

    const RefreshTransactions = async () =>{
        setTransactions(await FetchTransactions());
    }

    useEffect(()=>{
        RefreshTransactions();
    },[]);
    return(
        <div style={{width:"700px", height:"500px"}}>
            <SplineChart data={transactions} key="spline-chart"/>
        </div>
    )
}

export default Dashboard;