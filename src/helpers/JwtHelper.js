const jwt = require('jsonwebtoken');

class JwtHelper {

    Jwt = jwt;
    Token = "";

    async generateToken(user) {
        const token = await this.Jwt.sign({id : user.id}, process.env.JWT_SECRET, {expiresIn : '30d'})
        return token;
    }
}

module.exports = new JwtHelper();
    