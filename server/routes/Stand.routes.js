const Stand = require('../controllers/Stand.controllers');

module.exports = (app) => {
    app.post("/api/stands", Stand.create)
    app.get("/api/stands", Stand.findAll)
    app.get("/api/stands/:id", Stand.findId)   
    app.put("/api/stands/:id", Stand.updateStand)
    app.delete("/api/stands/:id", Stand.deleteStand)
}