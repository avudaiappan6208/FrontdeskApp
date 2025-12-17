const express = require('express');
const authroutes = require('./router/Authroutes');
const app = express();
app.use(express.json());
app.use('/auth',authroutes);


module.exports = app;