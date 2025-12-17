const express = require('express');
const authcontroller = require('../Controller/Authcontroller');

const authroutes = express.Router();

authroutes.post('/register', authcontroller.register);

module.exports = authroutes;
