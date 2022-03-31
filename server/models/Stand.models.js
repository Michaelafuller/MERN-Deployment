// We are requiring mongoose because it is the ORM that 
// helps us make a model
const mongoose = require('mongoose');

const StandSchema = new mongoose.Schema({
    total_sales: {
        type: Number,
        default: 0
    },
    total_cups: {
        type: Number,
        default: 0
    },
    total_tips:{
        type: Number,
        default:0
    },
    total_costs_incurred: {
        type: Number,
        default: 0
    },
    is_open: {
        type: Boolean,
        default: true
    },
    transactions: [{type: mongoose.Schema.Types.ObjectId, ref: "Transaction"}]
}, {timestamps: true})


const Stand = mongoose.model("Stand", StandSchema);

module.exports = Stand;



