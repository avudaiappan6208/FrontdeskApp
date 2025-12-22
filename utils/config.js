require('dotenv').config();

const mongodb_url = process.env.Mongodb;
const SECRET_KEY = process.env.SECRET_KEY;

module.exports = {
    mongodb_url,
    SECRET_KEY

};
