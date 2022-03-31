const Stand = require('../models/Stand.models');


// CREATE
module.exports.create = (req, res) => {
    Stand.create(req.body)
        .then(newStand => res.json(newStand))
        .catch(err => {
            console.log("DB ERROR-Stand Related");
            return res.status(400).json(err)
        })
},

// READ
    // READ ALL
module.exports.findAll = (req, res) => { // res=response
    Stand.find()
        .then(allStands => res.json(allStands)) // respond back with a json object
        .catch(err => {
            console.log("DB ERROR - Stand Related");
            return res.status(400).json(err)
        })
},

    // READ ONE BY ID
module.exports.findId = (req, res) => {
    Stand.findById(req.params.id)
        .then(singleStand => res.json(singleStand))
        .catch(err => {
            console.log("DB ERROR");
            return res.status(400).json(err)
        })
},

// UPDATE
module.exports.updateStand = (req, res) => {
    Stand.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedStand => res.json(updatedStand))
        .catch(err => {
            console.log("DB ERROR");
            return res.status(400).json(err)
        })
}

// DELETE
module.exports.deleteStand = (req, res) => {
    Stand.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(err => {
            console.log("DB ERROR");
            return res.status(400).json(err);
        })
}