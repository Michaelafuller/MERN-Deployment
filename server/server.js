const express = require('express');
const app = express();
const port = 8000;

const cors = require('cors');
const DB = "lemonade_DB";

app.use(cors(), express.json(), express.urlencoded({ extended: true }));
require('./routes/Stand.routes')(app);
require('./routes/Transaction.routes')(app);
require('./routes/Ingredient.routes')(app)
require('./config/mongoose.config')(DB);


app.listen(port, () => console.log(`Listening on port: ${port}`));