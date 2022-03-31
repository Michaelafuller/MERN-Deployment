const Transaction = require('../models/Transaction.models');


// CREATE
module.exports.create = (req, res) => {
    Transaction.create(req.body)
        .then(newTransaction => res.json(newTransaction))
        .catch(err => {
            console.log("DB ERROR-Transaction Related");
            return res.status(400).json(err)
        })
},

// READ
    // READ ALL
module.exports.findAll = (req, res) => { // res=response
    Transaction.find()
        .then(allTransactions => res.json(allTransactions)) // respond back with a json object
        .catch(err => {
            console.log("DB ERROR - Transaction Related");
            return res.status(400).json(err)
        })
},

    // READ ONE BY ID
module.exports.findId = (req, res) => {
    Transaction.findById(req.params.id)
        .populate("stand_session")
        .then(singleTransaction => res.json(singleTransaction))
        .catch(err => {
            console.log("DB ERROR");
            return res.status(400).json(err)
        })
},

    // READ TRANSACTIONS FROM A STAND SESSION
module.exports.findStandAll = (req, res) => {
    Transaction.find({stand_session: req.params.standId})
        .then(allTransactions => res.json(allTransactions)) // respond back with a json object
        .catch(err => {
            console.log("DB ERROR - Transaction Related");
            return res.status(400).json(err)
        })
}

// UPDATE
module.exports.updateTransaction = (req, res) => {
    Transaction.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedTransaction => res.json(updatedTransaction))
        .catch(err => {
            console.log("DB ERROR");
            return res.status(400).json(err)
        })
}

// DELETE
module.exports.deleteTransaction = (req, res) => {
    Transaction.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(err => {
            console.log("DB ERROR");
            return res.status(400).json(err);
        })
}