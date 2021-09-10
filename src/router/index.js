const routes = require('express').Router();


routes.get('/', () => {});

//Auth
const login = require('../controller/auth/login');
const token = require('../controller/auth/getUserByToken');

routes.post('/login', login);
routes.post('/token', token);


//Info
const getInfoByType = require('../controller/info/getInfoByType');
const setNewInfo = require('../controller/info/setNewInfo');

routes.get('/infoByType/:type', getInfoByType);
routes.put('/newInfo', setNewInfo);

module.exports = routes;