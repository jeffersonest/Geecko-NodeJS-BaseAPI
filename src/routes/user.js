const express = require('express');
const UserController = require('../controllers/UserController');
const userRoutes = express.Router();

userRoutes.post('/', UserController.create);
userRoutes.post('/login', UserController.auth);

module.exports = userRoutes;