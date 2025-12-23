const express = require('express');
const authcontroller = require('../Controller/Authcontroller');
const auth = require('../middleware/auth');

const authroutes = express.Router();

authroutes.post('/register', authcontroller.register);
authroutes.post('/login', authcontroller.login);
authroutes.post('/logout', authcontroller.logout);
authroutes.get('/me', auth.checkAuth, authcontroller.getme);

module.exports = authroutes;
