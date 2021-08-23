const routes = require('express').Router();
const login = require('../controller/auth/login');

routes.get('/', () => {});

//Auth
routes.post('/login', login);

module.exports = routes;