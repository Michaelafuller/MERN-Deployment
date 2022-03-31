import {useHistory} from 'react-router-dom';

const InvoicePage = () => {
    const history = useHistory();
    
    const toReceipt = () => {
        history.push("/receipt")
    }

    return (
        <div>
            <form className="form" style={{margin:"25px", padding:"15px", border:"solid black 2px"}} onSubmit={()=>toReceipt()}>
                <h2>Invoice</h2>
                <p>3 Lemonades @ $4/each</p>
                <hr />
                <p>Total Price: $12</p>
                Add Gratuity: <input type="number" style={{marginBottom:"15px"}}/><br />
                <button className="btn btn-primary">Payment Received</button>
            </form>
        </div>
    )
}

export default InvoicePage;