const mongoose = require('../../config/mongoose');
const { ProductsSchema } = require('./Products');
const Schema = mongoose.Schema;

const PurchaseSchema = new Schema({
    user_id: String,
    user_name: String,
    products: [ProductsSchema],
    value: Number
},{ 
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    paranoid: true,
});

var PurchaseModel = mongoose.model('Purchase', PurchaseSchema);

module.exports = { PurchaseSchema, PurchaseModel }