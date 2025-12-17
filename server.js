const mongoose = require('mongoose');
const { mongodb_url } = require('./utils/config');
const app = require('./app');
require('dotenv').config();

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
