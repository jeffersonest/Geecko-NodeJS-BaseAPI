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
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .required(),
      name: Joi.string().required(),
      profile_pic: Joi.string()
      .optional()
    }),
  }