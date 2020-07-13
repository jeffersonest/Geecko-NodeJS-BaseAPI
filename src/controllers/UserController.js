const {UserModel} = require('../database/models/User');
const jwt = require('jsonwebtoken');
const Bcrypt = require('bcrypt');
const { Status } = require('../helpers/StatusCode');

class UserController {

    User = UserModel;

    async auth(req, res, next){
        try {
            var user = await this.User.findOne({ email: req.body.email }).exec();

            if(!user ||!Bcrypt.compareSync(req.body.password, user.password)) {
                return res.status(200).send(Status[1]);
            }

            let data = Status[0];

            data.user = user;

            data.token = jwt.sign({id: user._id, email: user.email}, process.env.JWT_SECRET); 

            res.status(200).json(data);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    }

    async create(req, res, next){

        var user = await this.User.findOne({ email: req.body.email }).exec();

        if(user) {
            let data = Status[3]
            return res.status(400).send(data);
        }

        const userData = await this.User.create(req.body);

        return res.status(200).json(userData);
    }

    checkToken(req, res, next) {
        console.log('check token')
        return res.send('checkToken');
    }
}

module.exports = new UserController()