const Transaction = require('../controllers/Transaction.controllers');

module.exports = (app) => {
    app.post("/api/transactions", Transaction.create)
    app.get("/api/transactions", Transaction.findAll)
    app.get("/api/transactions/:id", Transaction.findId)   
    app.put("/api/transactions/:id", Transaction.updateTransaction)
    app.delete("/api/transactions/:id", Transaction.deleteTransaction)

    app.get("/api/transactions/stand/:standId", Transaction.findStandAll)
}