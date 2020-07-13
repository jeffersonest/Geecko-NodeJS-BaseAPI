const express = require('express');
const defaultRoutes = require('./default');
const authMiddleware = require('../middlewares/authMiddleware');
const userRoutes = require('./user');
const routes = express.Router();

routes.get('/', (req, res, next)=> {
    return res.status(200).send('Server online!')
});

routes.use('/default', authMiddleware.jwtValidation, defaultRoutes);
routes.use('/user', userRoutes);

module.exports = routes;