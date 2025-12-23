const jwt = require('jsonwebtoken');

const auth = {
    // middleware to check if the user is authenticated
    checkAuth: (req, res, next) => {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        try {
            const decoded = jwt.verify(token, require('../utils/config').SECRET_KEY);
            req.userid = decoded.id;
            next();

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

}
module.exports = auth;