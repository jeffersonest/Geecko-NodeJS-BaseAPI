const express = require('express');
const defaultRoutes = require('./default');
const routes = express.Router();

routes.get('/', (req, res, next)=> {
    return res.send('Server online!')
});

routes.use('/default', defaultRoutes);

module.exports = routes;