const mongoose = require('../../config/mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    name: String,
    store_value: Number,
    canteen_value: Number,
    amount: Number,
    thumb: String,
},{ 
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    paranoid: true,
});

var ProductsModel = mongoose.model('Products', ProductsSchema);

module.exports = { ProductsSchema, ProductsModel }