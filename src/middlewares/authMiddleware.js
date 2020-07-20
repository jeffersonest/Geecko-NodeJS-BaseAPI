const jwt = require("jsonwebtoken");
const { Status } = require("../helpers/StatusCode");

class AuthMiddleware {

    async jwtValidation(req, res, next) {
        try {
            const Header = req.headers.authorization;

            if (!Header)
                return res.status(401).json(Status[6]);

            const parts = Header.split(" ");

            if (!parts.length === 2)
                return res.status(401).json(Status[6]);

            const [scheme, token] = parts;

            if (!/^Bearer$/i.test(scheme))
                return res.status(401).json(Status[6]);

            jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                if (err) throw new Error('Invalid token!');
                req.userId = decoded.id;
            });

            return next();

        } catch (error) {
            let data = Status[6];
            data.error = error.message;
            res.status(400).json(data); 
        }
    }
}

module.exports = new AuthMiddleware();