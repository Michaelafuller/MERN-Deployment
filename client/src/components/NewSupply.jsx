import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const NewSupply = () => {
    const [newPurchase, setNewPurchase] = useState({
        name: '',
        price: '',
        quantity: '',
    });
    const [errorList, setErrorList] = useState([]);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/ingredient', newPurchase)
            .then(res => {
                console.log(res);
                setNewPurchase({
                    name: '',
                    price: '',
                    quantity: ''
                })
            })
            .catch(err => {
                console.log(err);
                const { errors } = err.response.data;
                const messages = Object.keys(errors).map(error => errors[error].message)
                setErrorList(messages);
            })
    }

    const finishedAdding = () => {
        history.push("/")
    }

    return (
        <div>
        <form className="form form-group" onSubmit={(e)=>handleSubmit(e)} style={{margin:"25px", padding:"25px", border:"solid black 2px"}}>
            <h2 style={{marginBottom:"45px"}}>Enter Ingredients Purchased</h2>
            <div style={{margin:"15px"}} className="row">
                <div>
                    {errorList.map((error, idx) => <p style={{ color: 'red' }} key={idx}>{error}</p>)}
                </div>
                <label className="col-sm-6 col-form-label">Ingredient Name:</label>
                <div className="col-sm-6">
                    <select style={{width: 200, height: 35}} 
                            onChange={(e) => setNewPurchase({...newPurchase, name: e.target.value})}
                            value={newPurchase.name}>
                        <option defaultValue hidden>Please select one...</option>
                        <option>Lemons</option>
                        <option>Plastic Cups</option>
                        <option>Bags of Sugar</option>
                    </select> 
                </div>
            </div>
            <div style={{margin:"15px"}} className="row">
                <label className="col-sm-6 col-form-label">Price ($):</label>
                <div className="col-sm-6">
                    <input
                        placeholder='no $ needed'
                        type='number'
                        onChange={(e) => setNewPurchase({...newPurchase, price: e.target.value})}
                        value={newPurchase.price}
                    />
                </div>
            </div>
            <div style={{margin:"15px"}} className="row">
                <label className="col-sm-6 col-form-label">Quantity: </label>
                <div className="col-sm-6">
                    <input 
                        type='number'
                        onChange={(e) => setNewPurchase({...newPurchase, quantity: e.target.value})}
                        value={newPurchase.quantity}
                    />
                </div>
            </div>
            <div style={{margin:"15px"}} className="row">
                <label className="col-sm-6 col-form-label">Multip Servings in Containers: </label>
                <div className="col-sm-6">
                    <input 
                        placeholder='optional'
                        type='number'
                        onChange={(e) => setNewPurchase({...newPurchase, servings: e.target.value})}
                        value={newPurchase.servings}
                    />
                </div>
            </div>
            <button className="btn btn-warning">Add Supply</button>
        </form>
        <button style={{margin:"35px"}} className="btn btn-success" onClick={()=>finishedAdding()}>Finished Adding Supplies</button>
        </div>
    )
}

export default NewSupply