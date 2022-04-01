import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Moment from 'react-moment';

const SessionDashboard = () => {
    const history = useHistory();
    const { standId } = useParams();
    const [currentStand, setCurrentStand] = useState({});
    const [stands, setStands] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [allTransactions, setAllTransactions] = useState([]);

    const goToTransaction = () => {
        axios.post('http://localhost:8000/api/transactions/')
        .then((res)=> {
            let transaction = res.data;
            history.push(`/transaction-page/${standId}/${transaction._id}`);
        })
        .catch((err)=>console.log(err))
    };

    const goToCloseout = () => {
        
        const updatedStand = {
            ...currentStand,
            is_open: false
        }
        
        axios.put(`http://localhost:8000/api/stands/${standId}`, updatedStand)
        .then((res)=> {
            console.log(res);
            setCurrentStand(updatedStand)})
        .catch((err)=>console.log(err))
        history.push(`/closeout/${standId}`);
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/stands/${standId}`)
        .then((res)=>setCurrentStand(res.data))
        .catch((err)=>console.log(err))

        axios.get('http://localhost:8000/api/stands')
        .then((res) => { 
            setStands(res.data);
        })
        .catch((err)=>console.log(err));

        axios.get('http://localhost:8000/api/ingredient')
            .then(res => {
                setIngredients(res.data)
            })
            .catch(err => console.log(err))

        axios.get(`http://localhost:8000/api/transactions/stand/${standId}`)
            .then( res => {
                console.log(res.data);
                setAllTransactions(res.data);
            })
            .catch(err => console.log(err))
    
    }, [])


    let cupTotal = 0, sugarTotal = 0, lemonTotal = 0;
    const lemonsOnly = ingredients.filter(obj => obj.name === 'Lemons');
    const sugarOnly = ingredients.filter(obj => obj.name === 'Plastic Cups');
    const cupsOnly = ingredients.filter(obj => obj.name === 'Bags of Sugar');
    for(let i = 0; i < lemonsOnly.length; i++) {
        lemonTotal += lemonsOnly[i].quantity;
    };
    for(let i = 0; i < sugarOnly.length; i++) {
        sugarTotal += sugarOnly[i].quantity;
    };
    for(let i = 0; i < cupsOnly.length; i++) {
        cupTotal += cupsOnly[i].quantity;
    };



    return (
        <div>
        <div style={{display:"flex", border:"2px solid black", padding:"25px", margin:"25px"}}>
            <div className="rightCol">
                <h2 style={{textAlign:"left"}}>Today's Totals</h2>
                <p style={{textAlign:"left"}}>Cups sold: {currentStand.total_cups}</p>
                <p style={{textAlign:"left"}}>Total Recipts: ${currentStand.total_sales}</p>
                <p style={{textAlign:"left"}}>Tips: ${currentStand.total_tips}</p>
                <p style={{textAlign:"left"}}>Costs Incurred: ${currentStand.total_costs_incurred}</p>
                <hr />
                <p style={{textAlign:"left"}}>Profit (not including tips): ${currentStand.total_sales - currentStand.total_tips - currentStand.total_costs_incurred}</p>
            </div>
            <div className="middleCol">
                <h2 style={{textAlign:"left"}}>Supplies on Hand</h2>
                <p style={{textAlign:"left", marginLeft:"15px"}}>Cups: {cupTotal}</p>
                <p style={{textAlign:"left", marginLeft:"15px"}}>Lemon Slices: {lemonTotal}</p>
                <p style={{textAlign:"left", marginLeft:"15px"}}>Sugar Scoops: {sugarTotal}</p>
            </div>
            <div className="rightCol" style={{marginLeft:"50px"}}>
                <h2>Last 5 Sales</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Sale Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allTransactions.map((transaction, idx) => 
                            <tr key={idx}>
                                <td><Moment format="hh:mm A">{transaction.createdAt}</Moment ></td>
                                <td>${transaction.price}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <button className="btn btn-success" style={{fontSize:"30px", display:"block", margin:"25px", height:"150px", width:"400px"}} onClick={()=>goToTransaction()}><b>New Transaction</b></button>
            <button className="btn btn-danger" style={{fontSize:"30px", display:"block", margin:"25px", height:"150px", width:"400px"}} onClick={()=>goToCloseout()}><b>Close Up Shop</b></button>
        </div>
    </div>
    )
}

export default SessionDashboard