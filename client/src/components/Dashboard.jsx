import React, { useState, useEffect } from "react";

const Dashboard = () => {

    return (
        <div>
            <div className="topRow" style={{ display:"flex", alignItems:"center" }}>
                <img style={{ width: "75px", margin: "15px" }} src="https://image.shutterstock.com/image-vector/lemon-logo-260nw-581576533.jpg" />
                <h1 style={{textAlign:"right" }}>Dashboard</h1>
            </div>
            <div className="middleRow" style={{ display:"flex"}}>
                <div className="leftCol">
                    <button className="btn btn-success" style={{display:"block", margin:"15px"}}>Open Stand</button>
                    <button className="btn btn-primary" style={{display:"block", margin:"15px"}}>New Supplies</button>
                </div>
                <div className="middleCol">
                    <div className="standState" style={{border:"solid black 2px", padding:"15px"}}>
                        <h2>Per Cup Breakdown</h2>
                        <p>Current Price per Cup: $4</p>
                        <hr style={{margin:"15px"}} />
                        <p>Cost of Lemon per Cup: $1</p>
                        <p>Cost of Surgar Mix per Cup: $0.25</p>
                        <p>Cost of Plastic Cup: $.10</p>
                        <hr style={{margin:"15px"}} />
                        <p>Profit per Cup: $2.65</p>
                        <hr style={{margin:"15px"}} />
                        <hr style={{margin:"15px"}} />
                        <h2>Supplies on Hand</h2>
                        <p>Lemons: 4</p>
                        <p>Lemonade Mix Scoops: 30</p>
                        <p>Cups: 30</p>
                    </div>
                </div>
            </div>
            <div className="bottomRow">
            <h2 style={{marginTop:"25px"}}>Past Stands</h2>
            <table className="table" style={{margin:"15px"}}>
                    <thead>
                        <th>Date</th>
                        <th>Total Sales</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>3/1/2022</td>
                            <td>$54</td>
                        </tr>
                        <tr>
                            <td>3/2/2022</td>
                            <td>$37</td>
                        </tr>
                        <tr>
                            <td>3/10/2022</td>
                            <td>$60</td>
                        </tr>
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard;