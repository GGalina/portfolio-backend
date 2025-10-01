const Joi = require('joi');

const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

const emailSchema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email().pattern(emailPattern).required(),
    message: Joi.string().min(2).required(),
});

module.exports = {
  emailSchema
};