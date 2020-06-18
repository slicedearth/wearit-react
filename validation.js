// THIRD PARTY IMPORTS
const Joi = require('@hapi/joi');

// EMAIL VALIDATION
const validateEmail = (email) => {
  const schema = Joi.object({
    firstName: Joi.string().min(1).empty(/^\s*$/).max(128).required().messages({
      'string.base': `Invalid First Name!'`,
      'string.empty': `Please enter a first name.`,
      'string.min': `First name must be at least {#limit} character long.`,
      'string.max': `First name cannot exceed {#limit} characters.`,
      'any.required': `Please provide a first name.`,
    }),
    lastName: Joi.string().min(1).empty(/^\s*$/).max(128).required().messages({
      'string.base': `Invalid Last Name!'`,
      'string.empty': `Please enter a last name.`,
      'string.min': `Last name must be at least {#limit} character long.`,
      'string.max': `Last name cannot exceed {#limit} characters.`,
      'any.required': `Please provide a last name.`,
    }),
    email: Joi.string().email().required().messages({
      'string.base': `Invalid Email Address!`,
      'string.empty': `Email field cannot be blank`,
      'string.email': `Please enter a valid email address.`,
      'any.required': 'Email address is required.',
    }),
    subject: Joi.string().empty(/^\s*$/).required().messages({
      'string.base': `Invalid Subject!'`,
      'string.empty': `Please select a subject.`,
      'any.required': `Please provide a subject.`,
    }),
    message: Joi.string().min(10).empty(/^\s*$/).max(999).required().messages({
      'string.base': `Invalid Message!`,
      'string.empty': `Message cannot be empty.`,
      'string.min': `Message must be at least {#limit} characters long.`,
      'string.max': `Message cannot exceed {#limit} characters.`,
      'any.required': `Message is a required field. Please enter a message.`,
    }),
  });
  return schema.validate(email);
};
// NEWSLETTER SIGNUP VALIDATION
const validateSignup = (newsletter) => {
  const schema = Joi.object({
    firstName: Joi.string().min(1).empty(/^\s*$/).max(128).required().messages({
      'string.base': `Invalid First Name!'`,
      'string.empty': `Please enter a first name.`,
      'string.min': `First name must be at least {#limit} character long.`,
      'string.max': `First name cannot exceed {#limit} characters.`,
      'any.required': `Please provide a first name.`,
    }),
    lastName: Joi.string().min(1).empty(/^\s*$/).max(128).required().messages({
      'string.base': `Invalid Last Name!'`,
      'string.empty': `Please enter a last name.`,
      'string.min': `Last name must be at least {#limit} character long.`,
      'string.max': `Last name cannot exceed {#limit} characters.`,
      'any.required': `Please provide a last name.`,
    }),
    email: Joi.string().email().required().messages({
      'string.base': `Invalid Email Address!`,
      'string.empty': `Email field cannot be blank`,
      'string.email': `Please enter a valid email address.`,
      'any.required': 'Email address is required.',
    }),
  });
  return schema.validate(newsletter);
};
module.exports.validateEmail = validateEmail;
module.exports.validateTxt = validateTxt;
module.exports.validateSignup = validateSignup;
