const express = require('express');
const authroutes = require('./router/Authroutes');
const cookieParser = require('cookie-parser');
const app = express();
app.use(express.json());  // parse the request body as JSON
app.use(cookieParser());  // to parse cookies

app.use('/auth', authroutes);


module.exports = app;