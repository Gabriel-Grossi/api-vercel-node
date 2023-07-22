const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(routes);
app.listen(3031, () => console.log('Server is Running...'));

module.exports = app;