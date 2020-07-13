const express = require('express');
const UserController = require('../controllers/UserController');
const { validate } = require('express-validation');
const { loginValidation } = require('../middlewares/validation');
const userRoutes = express.Router();

userRoutes.post('/', UserController.create);
userRoutes.post('/login', validate(loginValidation, {}, {keyByField: true, context: false}), UserController.auth);

module.exports = userRoutes;