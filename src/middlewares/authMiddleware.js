const JwtHelper = require("../helpers/JwtHelper");

class AuthMiddleware {

    Jwt = JwtHelper.Jwt;

    async jwtValidation(req, res, next) {
        try {
            const Header = req.headers.authorization;

            if (!Header)
                return res.status(401).json({ status: 8 });

            const parts = Header.split(" ");

            if (!parts.length === 2)
                return res.status(401).json({ status: 7 });

            const [scheme, token] = parts;

            if (!/^Bearer$/i.test(scheme))
                return res.status(401).json({ status: 7 });

            this.Jwt.verify(token, authConfig.secret, (err, decoded) => {
                if (err) throw new Error('Problem to generate token');
                req.userId = decoded.id;
            });

            return next();

        } catch (err) {
            return res.status(500).json({ status: 7, content: err });
        }
    }
}

module.exports = new AuthMiddleware();