import { useEffect, useState } from "react";
import AddTransaction from "../../components/addTransaction/AddTransaction";
import TransactionTable from "../../components/transactionTable/TransactionTable";
import "./Transaction.css";
import { FetchTransactions } from "../../api/Api";

const Transaction = () => {
    const [transactions, setTransactions] = useState([]);

    const RefreshTransactions = async () =>{
        setTransactions(await FetchTransactions());
    }

    useEffect(()=>{
        RefreshTransactions();
    },[]);
    return(
        <div className="transaction-content-container">
            <TransactionTable transactions={transactions}/>
            <AddTransaction RefreshTransactions={RefreshTransactions}/>
        </div>
    )
}

export default Transaction;