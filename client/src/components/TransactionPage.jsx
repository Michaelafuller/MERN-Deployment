import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom';
import { useState } from "react";

const TransactionPage = () => {
    const history = useHistory();
    const {standId, transactionId} = useParams();
    const [lemonades, setLemonades] = useState(0);
    const [transaction, setTransaction] = useState({})

    const goToInvoice = (e) => {
        e.preventDefault();

        axios.get(`http://localhost:8000/api/transactions/${transactionId}`)
            .then((res)=> setTransaction(res.data))
            .catch((err)=>console.log(err))

        const updatedTransaction = {
            ...transaction,
            stand_session: standId,
            lemonades: lemonades 
        }

        axios.put(`http://localhost:8000/api/transactions/${transactionId}`, updatedTransaction)
        .then((res) => {
            console.log(res);
            // setTransaction(updatedTransaction)
        })
        .catch((err) => console.log(err))

        history.push(`/invoice-page/${standId}/${transactionId}`)
    }

    return (
        <div>
            <form className="form" style={{margin:"25px", padding:"15px", border:"solid black 2px"}} onSubmit={(e)=>goToInvoice(e)}>
                <h2>Number of Lemonades for Order</h2>
                <p>{lemonades}</p>
                <input type="number" style={{marginBottom:"15px"}} onChange={(e)=>setLemonades(e.target.value)}/><br />
                <button className="btn btn-primary">Create Invoice</button>
            </form>
        </div>
    )
}

export default TransactionPage;