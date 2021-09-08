const routes = require('express').Router();
const login = require('../controller/auth/login');
const token = require('../controller/auth/getUserByToken');
const getInfoByType = require('../controller/info/getInfoByType');


routes.get('/', () => {});

//Auth
routes.post('/login', login);
routes.post('/token', token);


//Info
routes.get('/infoByType/:type', getInfoByType);

module.exports = routes;