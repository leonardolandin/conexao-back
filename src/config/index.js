const express = require('express');
const app = express();
const routes = require('../router');
const cors = require('cors');

app.use(express.json({limit: '20mb'}));
app.use(cors());

app.use('/', routes);

//Auth
app.use('/login', routes);
app.use('/token', routes)

//Info
app.use('/newInfo', routes);

module.exports = app;