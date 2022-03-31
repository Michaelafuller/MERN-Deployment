const Ingredient = require('../controllers/Ingredient.controllers');

module.exports = (app) => {
    app.post("/api/ingredient", Ingredient.create)
    app.get("/api/ingredient", Ingredient.findAll)
    app.get("/api/ingredient/:id", Ingredient.findId)   
    app.put("/api/ingredient/:id", Ingredient.updateIngredients)
    app.delete("/api/ingredient/:id", Ingredient.deleteIngredient)
}