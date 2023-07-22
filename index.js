const express = require('express');
const routes = require('./src/routes');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(routes);

const port = process.env.PORT || 9001
app.listen(port, () => console.log(`Server is Running on ${port}...`));

module.exports = app;