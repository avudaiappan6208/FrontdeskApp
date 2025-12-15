const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
app.get('/', (req, res) => {
    res.json({ message: 'Hello from server!' });
});
app.listen(3001, () => {
    console.log('Server is running @ http://localhost:3001');
});
mongoose.connect(process.env.Mongodb )
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
