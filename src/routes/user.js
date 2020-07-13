const express = require('express');
const UserController = require('../controllers/UserController');
const userRoutes = express.Router();

userRoutes.post('/user', UserController.create);

module.exports = userRoutes;