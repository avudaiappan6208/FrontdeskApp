const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.get('/', (req, res) => {
    res.json({ message: 'Hello from server!' });
});
app.listen(3001, () => {
    console.log('Server is running @ http://localhost:3001');
});
mongoose.connect(`mongodb+srv://vishal:vishalr6803@atlas.ib7eqcx.mongodb.net/FrontDeskApp`)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
