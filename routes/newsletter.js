// IMPORTS
const express = require('express');
const Joi = require('@hapi/joi');
const request = require('request');
// LOAD ROUTER
const router = express.Router();
// NEWSLETTER SIGN UP ROUTE
router.post('/', (req, res) => {
  // console.log(req.body);
  const { firstName, lastName, email } = req.body;
  console.log(firstName + ' ' + lastName);
  console.log(email);

  // NEWSLETTER SIGN UP VALIDATION
  const validateSignup = (newsletter) => {
    const schema = Joi.object({
      firstName: Joi.string().min(1).max(128).required().messages({
        'string.base': `Invalid First Name!'`,
        'string.empty': `Please enter a first name.`,
        'string.min': `First name must be at least {#limit} character long.`,
        'string.max': `First name cannot exceed {#limit} characters.`,
        'any.required': `Please provide a first name.`,
      }),
      lastName: Joi.string().min(1).max(128).required().messages({
        'string.base': `Invalid Last Name!'`,
        'string.empty': `Please enter a last name.`,
        'string.min': `Last name must be at least {#limit} character long.`,
        'string.max': `Last name cannot exceed {#limit} characters.`,
        'any.required': `Please provide a last name.`,
      }),
      email: Joi.string().email().required().messages({
        'string.base': `Invalid Email Address!`,
        'string.email': `Please enter a valid email address.`,
        'any.required': 'Email address is required.',
      }),
    });
    return schema.validate(newsletter);
  };
  const { error } = validateSignup(req.body);
  // CHECKS IF FIELDS ARE FILLED
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  // REQUEST DATA
  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  // console.log(data);

  // CONVERT JSON DATA TO STRING
  const postData = JSON.stringify(data);

  // MAILCHIMP CONFIG
  const options = {
    url: process.env.MAILCHIMP_URL,
    method: 'POST',
    headers: {
      Authorization: process.env.MAILCHIMP_AUTH,
    },
    body: postData,
  };

  // REQUEST CALLS
  request(options, (err, response, body) => {
    console.log(response.statusCode);
    console.log(response.statusMessage);
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      if (response.statusCode === 200) {
        res.status(200).send('Newsletter Signup Successful!');
      } else {
        console.log('Signup Failed!');
        console.log(err);

        res.status(500).send(`Newsletter Signup Failed! ERROR: ${err}`);
      }
    }
  });
});

module.exports = router;
