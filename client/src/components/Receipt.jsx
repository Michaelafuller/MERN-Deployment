import {useHistory} from 'react-router-dom';

const Receipt = () => {
    const history = useHistory();

    const backToSessionDashboard = () => {
        history.push("/session")
    };

    return (
        <div style={{padding:"25px", margin:"25px", border:"solid black 2px"}}>
            <h1>Thank You!</h1>
            <p>Would you like an emailed receipt?</p>
            <input />
            <div>
                <button className="btn btn-success" style={{margin:"15px"}} onClick={()=>backToSessionDashboard()}>Yes</button>
                <button className="btn btn-warning" style={{margin:"15px"}} onClick={()=>backToSessionDashboard()}>No Thanks</button>
            </div>
        </div>
    )
}

export default Receipt;