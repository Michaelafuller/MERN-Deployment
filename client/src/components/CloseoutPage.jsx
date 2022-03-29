import {useHistory} from 'react-router-dom';

const CloseoutPage = () => {
    const history = useHistory();

    const backToDash = () => {
        history.push("/");
    }
    return (
        <div style={{margin:"25px", padding:"25px", border:"solid black 2px"}}>
            <h1><b>Today's Stats</b></h1>
            <p>Total Sales: $55</p>
            <p>Total Tips: $10</p>
            <p>Total Costs: $20</p>
            <p>Total Profit (Not including tips): $25</p>
            <p>Start Time: 9:30 AM</p>
            <p>End Time: 5:30 PM</p>
            <p>Location: 15 Barrington Place, Seattle, WA 98119</p>
            <button className="btn btn-success" onClick={()=>backToDash()}>Back to Dashboard</button>
        </div>
    )
}

export default CloseoutPage;