const express = require('express');
const UserController = require('../controllers/UserController');
const { validate } = require('express-validation');
const { loginValidation, registerValidation } = require('../middlewares/validation');
const userRoutes = express.Router();

userRoutes.post('/', validate(registerValidation, {}, {keyByField: true, context: false}), UserController.create.bind(UserController));
userRoutes.post('/login', validate(loginValidation, {}, {keyByField: true, context: false}), UserController.auth.bind(UserController));

module.exports = userRoutes;