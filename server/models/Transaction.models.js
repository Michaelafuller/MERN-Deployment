const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    lemonades: {
        type: Number,
        required: [true, "Quantity was not selected"],
        default: 0
    },
    price: {
        type: Number,
        required: [true, "Price was not provided"],
        default: 0
    },
    tip: {
        type: Number,
        default: 0
    },
    stand_session: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Stand"
    }
})

const Transaction = mongoose.model("Transaction", TransactionSchema);
module.exports = Transaction;