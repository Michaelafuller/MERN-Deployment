import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';

const CloseoutPage = () => {
    const [currentStand, setCurrentStand] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const history = useHistory();
    const {standId} = useParams();


    useEffect(() => {
        axios.get(`http://localhost:8000/api/stands/${standId}`)
        .then((res)=> {
            console.log(res.data);
            setCurrentStand(res.data);
            setIsLoaded(true);
        })
        .catch((err)=>console.log(err))

    }, [standId]);

    const backToDash = () => {
        history.push("/");
    }


    return (
        <div style={{margin:"25px", padding:"25px", border:"solid black 2px"}}>
            <h1><b>Today's Stats</b></h1>
            {isLoaded ? 
                <div>
                    <p>Total Sales: ${currentStand.total_sales}</p>
                    <p>Total Tips: ${currentStand.total_tips}</p>
                    <p>Total Profit (Not including tips): ${currentStand.total_sales - currentStand.total_tips}</p>
                    <p>Start Time: <Moment format='hh:mm A'>{currentStand.createdAt}</Moment></p>
                    <p>End Time: <Moment format='hh:mm A'>{currentStand.updatedAt}</Moment></p>
                    <p>Location: 15 Barrington Place, Seattle, WA 98119</p>
                </div>
            : 'Loading...'}
            <button className="btn btn-success" onClick={()=>backToDash()}>Back to Dashboard</button>
        </div>
    )
}

export default CloseoutPage;