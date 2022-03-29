const TransactionPage = () => {

    return (
        <div>
            <form className="form" style={{margin:"25px", padding:"15px", border:"solid black 2px"}}>
                <h2>Number of Lemonades for Order</h2>
                <input type="number" style={{marginBottom:"15px"}}/><br />
                <button className="btn btn-primary">Create Invoice</button>
            </form>
        </div>
    )
}

export default TransactionPage;