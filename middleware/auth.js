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
    },
    // middlewares to allow roles passed as an arguments
    allowRole: (roles) => {
        return (req, res, next) => {
            const userRole = req.user.role;
            if (!roles.includes(userRole)) {
                return res.status(403).json({ message: 'Forbidden' });
            }
            next();
          
        };
    }
}
module.exports = auth;