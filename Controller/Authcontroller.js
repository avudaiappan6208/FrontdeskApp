const User = require('../Models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../utils/config');
const authcontroller = {
    register: async (req, res) => {
        try {
            const { username, email, password } = req.body;

            const user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ message: 'Email already in use' });
            }

            const hashedPassword = await bcrypt.hash(password, 20);

            const newuser = new User({
                username,
                email,
                password: hashedPassword
            });

            await newuser.save();
            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: "Invalid email or password" });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(500).json({ message: "Invalid Credentials" })
            }

            const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '6h' });
            res.cookie('token', token, { httpOnly: true });

            res.status(200).json({ message: "login successful" });

        } catch (error) {
            res.status(500).json({ message: error.message });

        }
    },

    logout: async (req, res) => {
        try {
            res.clearCookie('token');
            res.status(500).json({ message: 'logout successful' })

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getme: async (req, res) => {
        try {
          const userid = req.userid;
            const user = await User.findById(userid).select('-password, -__v');
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ user });

        }catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
module.exports = authcontroller;
