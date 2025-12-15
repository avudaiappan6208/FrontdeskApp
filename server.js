const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.json({ message: 'Hello from server!' });
});
app.listen(3001, () => {
    console.log('Server is running @ http://localhost:3001');
});


