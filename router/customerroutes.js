const express = require('express');
const customercontroller = require('../Controller/customercontroller');
const customerrouter = express.Router();
customerrouter.post('/',customercontroller.createcustomer);
customerrouter.get('/',customercontroller.getcustomer);
customerrouter.get('/:customerid',customercontroller.getcustomerbyid);
customerrouter.put('/:customerid',customercontroller.updatecustomer);
customerrouter.delete('/:customerid',customercontroller.deletecustomer);
module.exports = customerrouter;