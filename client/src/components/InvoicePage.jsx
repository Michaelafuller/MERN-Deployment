import axios from 'axios';
import { useEffect, useState } from 'react';
import {useHistory, useParams} from 'react-router-dom';

const InvoicePage = () => {
    const history = useHistory();
    const {standId, transactionId} = useParams();
    const [transaction, setTransaction] = useState({});
    const [stand, setStand] = useState({});
    const [tip, setTip] = useState(0);
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/stands/${standId}`)
        .then((res)=>{
            setStand(res.data);
            console.log(res.data, stand, "axios response for the stand");
            console.log(stand, 'stand after setting stand to axios response')
        })
        .catch((err)=>console.log(err))
        
        axios.get(`http://localhost:8000/api/transactions/${transactionId}`)
        .then((res)=> {
            console.log(res);
            setTransaction(res.data)
        })
        .catch((err)=>console.log(err))

        console.log(transaction, "this is the transaction");

    }, []) 
    
    const toReceipt = (e) => {
        e.preventDefault();

        const updatedTransaction = {
            ...transaction,
            tip: tip,
            price: 4*transaction.lemonades
        }

        axios.put(`http://localhost:8000/api/transactions/${transactionId}`, updatedTransaction)
        .then((res)=> {
            console.log(res.data)
            setTransaction(updatedTransaction)
            })
        .catch((err)=>console.log(err))

        console.log(stand, 'before axios put request to update stand');

        const updatedStand = {
            ...stand,
            total_sales: stand.total_sales + transaction.price,
            total_cups: stand.total_cups + transaction.lemonades,
            total_tips: stand.total_tips + transaction.tip
        }

        console.log(stand, 'after put request updating stand')

        axios.put(`http://localhost:8000/api/stands/${standId}`, updatedStand)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))

        history.push(`/receipt/${standId}/${transactionId}`)
    }

    return (
        <div>
            <form className="form" style={{margin:"25px", padding:"15px", border:"solid black 2px"}} onSubmit={(e)=>toReceipt(e)}>
                <h2>Invoice</h2>
                <p>{transaction.lemonades} Lemonades @ $4/each</p>
                <hr />
                <p>Total Price: ${transaction.lemonades * 4}</p>
                Add Gratuity: <input type="number" style={{marginBottom:"15px"}} onChange={(e)=>setTip(e.target.value)}/><br />
                <button className="btn btn-primary">Payment Received</button>
            </form>
        </div>
    )
}

export default InvoicePage;