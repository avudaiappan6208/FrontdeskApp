const customer = require('../Models/Customer');

const customercontroller = {
    createcustomer: async (req, res) => {
        try {
            const { name, email, location, } = req.body;
            const newCustomercustomer = await customer.findOne({
                email: email
            });
            if (newCustomercustomer) {
                return res.status(400).json({ message: "Customer already exists" });
            }
            const newCustomer = new customer({ name, email, location, });
            await newCustomer.save();
            res.status(201).json({ message: "Customer created successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    getcustomer: async (req, res) => {
        try {
            const customers = await customer.find().select('-__v');
            res.status(200).json({ customers });
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    getcustomerbyid: async (req, res) => {
        try {
            const customerid = req.params.customerid;
            const customerdetail = await customer.findById(customerid).select('-__v');
            res.status(200).json({ customerdetail });
            if (!customerdetail) {
                return res.status(404).json({ message: "Customer not found" });
            }
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    updatecustomer: async (req, res) => {
        try {
            const customerid = req.params.customerid;
            
            const { name, email, location, } = req.body;
            await customer.findByIdAndUpdate(customerid, {
                name,
                email,
                location,
            });

            res.status(200).json({ message: "Customer updated successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    deletecustomer: async (req, res) => {
        try {
            const customerid = req.params.customerid;
            const customerdetail = await customer.findById(customerid);
            if (!customerdetail) {
                return res.status(404).json({ message: "Customer not found" });
            }
            await customer.findByIdAndDelete(customerid);

            res.status(200).json({ message: "Customer deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}
module.exports = customercontroller