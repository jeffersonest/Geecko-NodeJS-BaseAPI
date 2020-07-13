const { UserModel } = require('../database/models/User');
const jwt = require('jsonwebtoken');
const Bcrypt = require('bcrypt');
const { Status } = require('../helpers/StatusCode');

class UserController {

    async auth(req, res, next) {

        try {
            const {email} = req.body

            const user = await UserModel.findOne({ email }).exec();

            const {password, ...userData} = user._doc;

            if (!user || !Bcrypt.compareSync(req.body.password, user.password)) {
                return res.status(200).send(Status[1]);
            }

            let data = Status[0];

            data.user = userData;

            data.token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET);

            res.status(200).json(data);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    }

    async create(req, res, next) {
        try {

            const {email} = req.body

            var user = await UserModel.findOne({ email }).exec();

            if (user) {
                let data = Status[3]
                return res.status(400).send(data);
            }

            const userData = await UserModel.create(req.body);
            
            const {password, ...data} = userData._doc;

            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json({error: error.message});
        }

    }

    checkToken(req, res, next) {
        console.log('check token')
        return res.send('checkToken');
    }
}

module.exports = new UserController()