const express = require('express');
const { validate } = require('express-validation');
const { createPurchaseValidation, updatePurchaseValidation, deletePurchaseValidation } = require('../middlewares/validation');
const PurchaseController = require('../controllers/PurchaseController');
const purchaseRoutes = express.Router();

purchaseRoutes.post('/create', validate(createPurchaseValidation, {}, {keyByField: true, context: false}), PurchaseController.create.bind(PurchaseController));
purchaseRoutes.post('/update', validate(updatePurchaseValidation, {}, {keyByField: true, context: false}), PurchaseController.update.bind(PurchaseController));
purchaseRoutes.post('/delete', validate(deletePurchaseValidation, {}, {keyByField: true, context: false}), PurchaseController.delete.bind(PurchaseController));
purchaseRoutes.get('/list', PurchaseController.list.bind(PurchaseController));

module.exports = purchaseRoutes;