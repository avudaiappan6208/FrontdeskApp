const User = require('../Models/user');

const authcontroller = {
    register: async (req, res) => {
        try {
            const { username, email, password } = req.body;

            const user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ message: 'Email already in use' });
            }

            const newuser = new User({
                username,
                email,
                password
            });

            await newuser.save();
            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};
module.exports = authcontroller;
