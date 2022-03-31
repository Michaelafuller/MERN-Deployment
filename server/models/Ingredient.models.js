const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Ingredient was not selected."]
    },
    price: {
        type: Number,
        required: [true, "Price was not provided."]
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity must be greater than zero.']
    },
    
    // items * item portion needed for one lemonade
    servings: {
        type: Number
    }
})

const Ingredient = mongoose.model("Ingredient", IngredientSchema);
module.exports = Ingredient;