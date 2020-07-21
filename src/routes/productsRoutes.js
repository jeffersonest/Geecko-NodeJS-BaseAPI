const express = require('express');
const ProductsController = require('../controllers/ProductsController');
const productsRoutes = express.Router();

productsRoutes.post('/create', ProductsController.create);

module.exports = productsRoutes;