import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';

const Dashboard = () => {
    const history = useHistory();
    const [stands, setStands] = useState([]);
    const [currentSession, setCurrentSession] = useState("");

    const startStand = () => {
        axios.post('http://localhost:8000/api/stands')
        .then((res)=> history.push(`/session/${res.data._id}`))
        .catch((err)=>console.log(err))  
    };

    const addSupply = () => {
        history.push("/add-supply");
    };

    useEffect(() => {
        axios.get(`http://localhost:8000/api/stands/`)
        .then((res) => {setStands(res.data)})
        .catch((err) => console.log(err))
    })

    return (
        <div>
            <div className="topRow" style={{ display:"flex", alignItems:"center"}}>
                <div>
                    <img style={{ width: "75px", margin: "25px" }} src="https://image.shutterstock.com/image-vector/lemon-logo-260nw-581576533.jpg" />
                </div>
                <div style={{flexDirection:"row", textAlign:"center", justifyContent:"center"}}>
                    <h1 style={{justifyContent:"center"}}>Dashboard</h1>
                </div>     
            </div>
            <div className="middleRow" style={{ display:"flex"}}>
                <div className="leftCol">
                    <button className="btn btn-success" style={{fontSize:"30px", display:"block", margin:"25px", height:"150px", width:"400px"}} onClick={()=>startStand()}><b>Open Stand</b></button>
                    <button className="btn btn-primary" style={{fontSize:"30px", display:"block", margin:"25px", height:"150px", width:"400px"}} onClick={()=>addSupply()}><b>Add Supplies</b></button>
                </div>
                <div className="middleCol">
                    <div className="standState" style={{border:"solid black 2px", padding:"30px", margin:"25px"}}>
                        <h2>Per Cup Breakdown</h2>
                        <p>Current Price per Cup: $4</p>
                        <hr style={{margin:"15px"}} />
                        <p>Cost of Lemon per Cup: $1</p>
                        <p>Cost of Surgar Mix per Cup: $0.25</p>
                        <p>Cost of Plastic Cup: $.10</p>
                        <hr style={{margin:"15px"}} />
                        <p>Profit per Cup: $2.65</p>
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <a href="#">Change Price</a>
                            <a href="#">Change Recipe</a>
                        </div>
                        <hr style={{margin:"15px"}} />
                        <hr style={{margin:"15px"}} />
                        <h2>Supplies on Hand</h2>
                        <p>Lemons: 4</p>
                        <p>Lemonade Mix Scoops: 30</p>
                        <p>Cups: 30</p>
                    </div>
                </div>
                <div className="rightCol">
                <div className="tableHolder" style={{marginTop:"25px", border:"solid black 2px", padding:"25px"}}>
                    <h2>Past Stands</h2>
                    <table className="table">
                            <thead>
                                <th>Date</th>
                                <th>Total Sales</th>
                            </thead>
                            <tbody>
                                {stands.map((stand, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td><Moment format="MM/DD/YYYY">{stand.createdAt}</Moment ></td>
                                            <td>${stand.total_sales}</td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;