import { useHistory } from "react-router-dom"

const SessionDashboard = () => {
    const history = useHistory();

    const goToTransaction = () => {
        history.push("/transaction-page");
    };
    
    return (
        <div>
        <div style={{display:"flex", border:"2px solid black", padding:"25px", margin:"25px"}}>
            <div className="rightCol">
                <h2 style={{textAlign:"left"}}>Today's Totals</h2>
                <p style={{textAlign:"left"}}>Cups sold: 50</p>
                <p style={{textAlign:"left"}}>Total Recipts: $50</p>
                <p style={{textAlign:"left"}}>Tips: $12</p>
                <p style={{textAlign:"left"}}>Costs Incurred: $12</p>
                <hr />
                <p style={{textAlign:"left"}}>Profit (not including tips): $26</p>
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
            <button className="btn btn-danger" style={{fontSize:"30px", display:"block", margin:"25px", height:"150px", width:"400px"}}><b>Close Up Shop</b></button>
        </div>
    </div>
    )
}

export default SessionDashboard