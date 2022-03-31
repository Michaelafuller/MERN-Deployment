import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom"

const SessionDashboard = () => {
    const history = useHistory();
    const { standId } = useParams();
    const [currentStand, setCurrentStand] = useState({});
    const [stands, setStands] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    const [standTransactions, setStandTransactions] = useState([]);
    const [totalReceipts, setTotalReceipts] = useState(0);
    const [tips, setTips] = useState(0);

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

        axios.get(`http://localhost:8000/api/transactions/stand/${standId}`)
        .then((res)=>setStandTransactions(res.data))
        .catch((err)=>console.log(err))

        for (const transaction of standTransactions) {
            setTotalReceipts(totalReceipts+=transaction.price);
            setTips(tips += transaction.tip)
        }

        axios.get('http://localhost:8000/api/stands')
        .then((res) => { 
            setStands(res.data); 
            setIsDeleted(false)})
        .catch((err)=>console.log(err))
    }, [isDeleted])

    const handleDelete = (deleteStandId) => {
        axios.delete('http://localhost:8000/api/stands/'+deleteStandId)
        .then((res)=>{
            setIsDeleted(true)
            setStands(stands.filter(stand => stand._id===deleteStandId))
        })
        .catch((err)=>console.log(err))
    }
    
    return (
        <div>
        <p>{JSON.stringify(standTransactions)}</p>
        <div style={{display:"flex", border:"2px solid black", padding:"25px", margin:"25px"}}>
            <div className="rightCol">
                <h2 style={{textAlign:"left"}}>Today's Totals</h2>
                <p style={{textAlign:"left"}}>Cups sold: {currentStand.total_cups}</p>
                <p style={{textAlign:"left"}}>Total Recipts: ${totalReceipts}</p>
                <p style={{textAlign:"left"}}>Tips: ${tips}</p>
                <p style={{textAlign:"left"}}>Costs Incurred: ${currentStand.total_costs_incurred}</p>
                <hr />
                <p style={{textAlign:"left"}}>Profit (not including tips): ${currentStand.total_sales - currentStand.total_tips - currentStand.total_costs_incurred}</p>
            </div>
            <div className="middleCol">
                <h2 style={{textAlign:"left"}}>Supplies on Hand</h2>
                <p style={{textAlign:"left", marginLeft:"15px"}}>Cups: 15</p>
                <p style={{textAlign:"left", marginLeft:"15px"}}>Lemon Slices: 12</p>
                <p style={{textAlign:"left", marginLeft:"15px"}}>Sugar Scoops: 30</p>
            </div>
            <div className="rightCol" style={{marginLeft:"50px"}}>
                <h2>Last 5 Sales</h2>
                <table>
                    <thead>
                        <th>Time</th>
                        <th>Sale Amount</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>11:32 AM</td>
                            <td>$18</td>
                        </tr>
                        <tr>
                            <td>10:06 AM</td>
                            <td>$8</td>
                        </tr>
                        <tr>
                            <td>10:06 AM</td>
                            <td>$8</td>
                        </tr>
                        <tr>
                            <td>9:45 AM</td>
                            <td>$4</td>
                        </tr>
                        <tr>
                            <td>9:30 AM</td>
                            <td>$12</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <button className="btn btn-success" style={{fontSize:"30px", display:"block", margin:"25px", height:"150px", width:"400px"}} onClick={()=>goToTransaction()}><b>New Transaction</b></button>
            <button className="btn btn-danger" style={{fontSize:"30px", display:"block", margin:"25px", height:"150px", width:"400px"}} onClick={()=>goToCloseout()}><b>Close Up Shop</b></button>
        </div>
        <div>
            {stands.map((stand, idx) => {
                return (
                    <div key={idx}>
                        <p>{stand.is_open ? "open" : "closed"}</p>
                        <button className="btn btn-danger" onClick={()=>handleDelete(stand._id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    </div>
    )
}

export default SessionDashboard