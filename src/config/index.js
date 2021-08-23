const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('../router');
const cors = require('cors');

app.use(bodyParser.json({
    limit: '10mb', 
    extended: true
}));

let whiteList = [];

if(process.env.CORS_ORIGINS) {
    whiteList = JSON.parse(process.env.CORS_ORIGINS);
}

//let corsOptions = {
//    origin: function(origin, callback) {
//        if(whiteList.indexOf(origin) !== -1) {
//            return callback(null, true);
//        } else {
//            return callback(null, false);
//        }
//    },
//    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS']
//}

app.use(express.json);
app.use(cors());


//Auth
app.use('/login', routes);

module.exports = app;