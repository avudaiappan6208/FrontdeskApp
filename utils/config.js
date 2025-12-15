require('dotenv').config();

const mongodb_url = process.env.Mongodb;
const PORT = process.env.PORT;
module.exports = {
    mongodb_url,
    PORT
};
