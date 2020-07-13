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