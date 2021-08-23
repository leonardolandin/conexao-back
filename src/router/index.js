const routes = require('express').Router();
const login = require('../controller/auth/login');

//Auth
routes.post('/login', login);

module.exports = routes;