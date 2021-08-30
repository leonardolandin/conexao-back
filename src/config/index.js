const express = require('express');
const app = express();
const routes = require('../router');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/', routes);

//Auth
app.use('/login', routes);

module.exports = app;