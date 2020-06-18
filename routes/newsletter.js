// THIRD PARTY IMPORTS
const express = require('express');
const request = require('request');
// CUSTOM IMPORTS
const { validateSignup } = require('../validation');

// LOAD ROUTER
const router = express.Router();

// NEWSLETTER SIGN UP ROUTE
router.post('/signup', (req, res) => {
  // console.log(req.body);
  const { firstName, lastName, email } = req.body;
  console.log(firstName + ' ' + lastName);
  console.log(email);

  // NEWSLETTER SIGN UP VALIDATION
  const { error } = validateSignup(req.body);
  // CHECK IF THERE ARE ANY VALIDATION ERRORS
  if (error) {
    // RETURN ERROR MESSAGE
    return res.status(400).send(error.details[0].message);
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

  // REQUEST HANDLING
  request(options, (err, response, body) => {
    console.log(response.statusCode);
    console.log(response.statusMessage);
    if (err) {
      console.log(err);
      // SEND A 400 STATUS CODE WITH ERROR MESSAGE
      res.status(400).send(err);
    } else {
      // IF STATUS CODE = 200...
      if (response.statusCode === 200) {
        // SEND A 200 STATUS CODE BACK WITH MESSAGE
        res.status(200).send('Newsletter Signup Successful!');
      } else {
        console.log('Signup Failed!');
        console.log(err);
        // SEND A 500 STATUS CODE WITH ERROR MESSAGE
        res.status(500).send(`Newsletter Signup Failed! ERROR: ${err}`);
      }
    }
  });
});

module.exports = router;
