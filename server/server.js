const express = require('express');
const app = express();
const port = 8000;

const cors = require('cors')
const DB = "lemonade_DB";

app.use(cors(), express.json(), express.urlencoded({ extended: true }));
require('./config/mongoose.config')(DB);

require('./routes/Transaction.routes')(app);
require('./routes/Stand.routes')(app);

const cors = require('cors');
const DB = "lemonade_DB";

app.use(cors(), express.json(), express.urlencoded({ extended: true }));
require('./routes/Stand.routes')(app);
require('./routes/Transaction.routes')(app);
require('./config/mongoose.config')(DB);


app.listen(port, () => console.log(`Listening on port: ${port}`));