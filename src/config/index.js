const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('../router');
const cors = require('cors');

app.use(bodyParser.json({
    limit: '10mb', 
    extended: true
}));

app.use(express.json());
app.use(cors());


app.use('/', routes);

//Auth
app.use('/login', routes);

module.exports = app;