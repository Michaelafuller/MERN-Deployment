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
            tip: parseInt(tip),
            price: 4*transaction.lemonades
        }

        axios.put(`http://localhost:8000/api/transactions/${transactionId}`, updatedTransaction)
        .then((res)=> {
            console.log(res.data)
            setTransaction(updatedTransaction)
            })
        .catch((err)=>console.log(err))

        const updatedStand = {
            ...stand,
            total_sales: stand.total_sales + updatedTransaction.price,
            total_cups: stand.total_cups + updatedTransaction.lemonades,
            total_tips: stand.total_tips + parseInt(tip)
        }

        console.log(stand, 'after put request updating stand')

        axios.put(`http://localhost:8000/api/stands/${standId}`, updatedStand)
        .then((res)=>{
            setStand(updatedStand);
            console.log(updatedStand);
        })
        .catch((err)=>console.log(err))

        history.push(`/receipt/${standId}/${transactionId}`)
    }

    return (
        <div>
            <p>{JSON.stringify(tip)}</p>
            <form className="form" style={{margin:"25px", padding:"15px", border:"solid black 2px"}} onSubmit={(e)=>toReceipt(e)}>
                <h2>Invoice</h2>
                <p>{transaction.lemonades} Lemonades @ $4/each</p>
                <hr />
                <p>Total Price: ${transaction.lemonades * 4}</p>
                Add Gratuity: <input type="number" style={{marginBottom:"15px"}} onChange={(e)=>setTip(e.target.value)} value={tip}/><br />
                <button className="btn btn-primary">Payment Received</button>
            </form>
        </div>
    )
}

export default InvoicePage;