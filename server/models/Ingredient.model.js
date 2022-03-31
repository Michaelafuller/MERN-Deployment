const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Quantity was not selected"]
    },
    price: {
        type: Number,
        required: [true, "Price was not provided"]
    },
    // items * item portion needed for one lemonade
    quantity: {
        type: Number,
        default: 0
    }
})

const Ingredient = mongoose.model("Ingredient", IngredientSchema);
module.exports = Ingredient;