const express = require('express');
const mongoose = require('mongoose');
const { mongodb_url } = require('./utils/config');
require('dotenv').config();
const app = express();
app.get('/', (req, res) => {
    res.json({ message: 'Hello from server!' });
});
app.listen(3001, () => {
    console.log('Server is running @ http://localhost:3001');
});
mongoose.connect(mongodb_url )
    .then(() => {
        console.log('Connected to MongoDB...');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
