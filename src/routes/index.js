const express = require('express');
const defaultRoutes = require('./default');
const authMiddleware  = require('../middlewares/authMiddleware');
const routes = express.Router();

routes.get('/', (req, res, next)=> {
    return res.status(200).send('Server online!')
});

routes.use('/default', authMiddleware, defaultRoutes);

module.exports = routes;