const routes = require('express').Router();
const login = require('../controller/auth/login');
const token = require('../controller/auth/getUserByToken');

routes.get('/', () => {});

//Auth
routes.post('/login', login);
routes.post('/token', token);

module.exports = routes;