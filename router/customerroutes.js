const express = require('express');
const customercontroller = require('../Controller/customercontroller');
const auth = require('../middleware/auth');
const customerrouter = express.Router();

customerrouter.post('/',auth.allowRole(['admin','manager']), customercontroller.createcustomer);
customerrouter.get('/',customercontroller.getcustomer);
customerrouter.get('/:customerid',customercontroller.getcustomerbyid);
customerrouter.put('/:customerid',customercontroller.updatecustomer);
customerrouter.delete('/:customerid',customercontroller.deletecustomer);
module.exports = customerrouter;