const Ingredient = require('../models/Ingredient.models');


// CREATE
module.exports.create = (req, res) => {
    Ingredient.create(req.body)
        .then(newIngredient => res.json(newIngredient))
        .catch(err => {
            console.log("DB ERROR-Ingredients Related");
            return res.status(400).json(err)
        })
},

// READ
    // READ ALL
module.exports.findAll = (req, res) => { // res=response
    Ingredient.find()
        .then(allIngredients => res.json(allIngredients)) // respond back with a json object
        .catch(err => {
            console.log("DB ERROR - Ingredients Related");
            return res.status(400).json(err)
        })
},

    // READ ONE BY ID
module.exports.findId = (req, res) => {
    Ingredient.findById(req.params.id)
        .then(singleIngredient => res.json(singleIngredient))
        .catch(err => {
            console.log("DB ERROR");
            return res.status(400).json(err)
        })
},

// UPDATE
module.exports.updateIngredients = (req, res) => {
    Ingredient.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedIngredient => res.json(updatedIngredient))
        .catch(err => {
            console.log("DB ERROR");
            return res.status(400).json(err)
        })
}

// DELETE
module.exports.deleteIngredient = (req, res) => {
    Ingredient.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(err => {
            console.log("DB ERROR");
            return res.status(400).json(err);
        })
}