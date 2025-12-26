const mongoose = require('mongoose');

const customerschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    location: String,
    phone: String,
    updatedAt: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Customer', customerschema);