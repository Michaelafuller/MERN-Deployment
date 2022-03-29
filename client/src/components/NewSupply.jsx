import {useHistory} from 'react-router-dom';

const NewSupply = () => {
    const history = useHistory();

    const handleSubmit = () => {
        history.push("/add-supply")
    }

    const finishedAdding = () => {
        history.push("/")
    }

    return (
        <div>
        <form className="form form-group" onSubmit={()=>handleSubmit()} style={{margin:"25px", padding:"25px", border:"solid black 2px"}}>
            <h2 style={{marginBottom:"45px"}}>Enter Ingredients Purchased</h2>
            <div style={{margin:"15px"}} className="row">
                <label className="col-sm-6 col-form-label">Ingredient Name:</label>
                <div className="col-sm-6">
                    <input />
                </div>
            </div>
            <div style={{margin:"15px"}} className="row">
                <label className="col-sm-6 col-form-label">Price ($):</label>
                <div className="col-sm-6">
                    <input />
                </div>
            </div>
            <div style={{margin:"15px"}} className="row">
                <label className="col-sm-6 col-form-label">Quantity: </label>
                <div className="col-sm-6">
                    <input />
                </div>
            </div>
            <div style={{margin:"15px"}} className="row">
                <label className="col-sm-6 col-form-label">Multip Servings in Containers: </label>
                <div className="col-sm-6">
                    <input />
                </div>
            </div>
            <button className="btn btn-warning">Add Supply</button>
        </form>
        <button style={{margin:"35px"}} className="btn btn-success" onClick={()=>finishedAdding()}>Finished Adding Supplies</button>
        </div>
    )
}

export default NewSupply