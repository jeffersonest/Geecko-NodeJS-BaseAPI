const express = require('express');
const defaultRoutes = require('./defaultRoutes');
const authMiddleware = require('../middlewares/authMiddleware');
const userRoutes = require('./userRoutes');
const purchaseRoutes = require('./purchaseRoutes');
const productsRoutes = require('./productsRoutes');
const routes = express.Router();

routes.get('/', (req, res, next)=> {
    return res.status(200).send('Server online!')
});

routes.use('/default', authMiddleware.jwtValidation, defaultRoutes);
routes.use('/user', userRoutes);
routes.use('/purchase', purchaseRoutes);
routes.use('/products', productsRoutes);

module.exports = routes;