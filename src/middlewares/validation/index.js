const { Joi } = require('express-validation');

exports.loginValidation = {
    body: Joi.object({
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .required(),
    }),
  }

  exports.registerValidation = {
    body: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      name: Joi.string().required(),
      profile_pic: Joi.string().optional()
    }),
  }

  exports.registerProductsValidation = {
    body: Joi.object({
      name: Joi.string().required(),
      canteen_value: Joi.number().required(),
      store_value: Joi.string().required(),
      thumb: Joi.string().optional()
    }),
  }

  exports.createPurchaseValidation = {
    body: Joi.object({
      user_id: Joi.string(),
      products: Joi.array(),
    }),
  }

  exports.updatePurchaseValidation = {
    body: Joi.object({
      purchase_id: Joi.string(),
      products: Joi.array()
    }),
  }

  exports.deletePurchaseValidation = {
    body: Joi.object({
      purchase_id: Joi.string()
    }),
  }