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
                const purchase = await PurchaseModel.create({products : products, value : this.sumProducts(products)});
                await user.purchases.push(purchase);
                await user.save();

                return res.send(Status[0])
            } else {
                return res.send(Status[2])
            }

        } catch (error) {
            console.log(error)
        }
    }

    async list(req, res) {

    }

    async update(req, res) {

    }

    async delete(req, res) {

    }
}

module.exports = new PurchaseController();