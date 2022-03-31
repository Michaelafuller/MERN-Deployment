// We are requiring mongoose because it is the ORM that 
// helps us make a model
const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    total_sales: {
        type: Number,
        default: 0
    },
    ingredients: [Ingredient]
})

// Create the schema and export it
// 1st param is the name, the second is the schema to abide by
const Recipe = mongoose.model("Recipe", RecipeSchema);
module.exports = Recipe;