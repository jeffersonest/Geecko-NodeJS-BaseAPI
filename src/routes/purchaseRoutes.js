const express = require('express');
const { validate } = require('express-validation');
const { registerPurchaseValidation } = require('../middlewares/validation');
const PurchaseController = require('../controllers/PurchaseController');
const purchaseRoutes = express.Router();

purchaseRoutes.post('/', validate(registerPurchaseValidation, {}, {keyByField: true, context: false}), PurchaseController.create.bind(PurchaseController));

module.exports = purchaseRoutes;