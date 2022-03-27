const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors')

app.use(cors(), express.json(), express.urlencoded({ extended: true }));
// require('./routes/todo.route')(app);
// require('./config/mongoose.config');

app.listen(port, () => console.log(`Listening on port: ${port}`));