const {PurchaseModel} = require('../database/models/Purchase');
const { UserModel } = require('../database/models/User');
const { Status } = require('../helpers/StatusCode');

class PurchaseController {

    sumProducts(products) {
        let sum = 0;
        products.forEach(product => {
            sum = sum + product.canteen_value;
        });

        return sum;
    }

    async create(req, res, next) {
        try {
            const {products, user_id} = req.body;

            const user = await UserModel.findById({_id: user_id});
            
           
            if(user) {
                const purchase = await PurchaseModel.create({user_name: user.name, user_id, products : products, value : this.sumProducts(products)});
                await user.purchases.push(purchase);
                await user.save();

                return res.send(Status[0]);
            } else {
                return res.send(Status[2]);
            }

        } catch (error) {
            let data = Status[5];
            data.error = error.message;
            res.status(200).json(data); 
        }
    }

    async list(req, res) {
        try {
            const purchases = await PurchaseModel.find();
            let data = Status[0];
            data.purchases = purchases;
            return res.status(200).json(data);
        } catch (error) {
            let data = Status[5];
            data.error = error.message;
            res.status(200).json(data); 
        }
    }

    async update(req, res) {
        try {
            const { purchase_id, products } = req.body;

            const purchase = await PurchaseModel.findById(purchase_id);
    
            purchase.products = products;
    
            await purchase.save();
    
            res.status(200).json(Status[0]);    
        } catch (error) {
            let data = Status[5];
            data.error = error.message;
            res.status(200).json(data); 
        }
    }

    async delete(req, res) {
        try {
            const { purchase_id } = req.body;

            const purchase = await PurchaseModel.remove({_id : purchase_id});

            const user_purchase = await UserModel.updateOne(
                { },
                { $pull: { purchases: { _id: purchase_id } } } 
            );

            if(user_purchase.ok === 1 && purchase.ok ===1)
                res.status(200).json(Status[0]);   
    
            
        } catch (error) {
            let data = Status[5];
            data.error = error.message;
            res.status(200).json(data); 
        }
    }   
}

module.exports = new PurchaseController();