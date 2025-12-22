const express = require('express');
const authcontroller = require('../Controller/Authcontroller');

const authroutes = express.Router();

authroutes.post('/register', authcontroller.register);
authroutes.post('/login', authcontroller.login);
authroutes.post('/logout',authcontroller.logout);

module.exports = authroutes;
