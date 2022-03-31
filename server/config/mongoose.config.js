const mongoose = require('mongoose');

// anonymous function that only takes the DB name as an arg
module.exports = (DB) => {
    mongoose.connect(`mongodb://localhost/${DB}`)
        .then( () => console.log(`Connected to the ${DB} db`))
        .catch( err => console.log(`Cannot connect to the ${DB}`, err))
}