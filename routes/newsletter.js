// IMPORTS
const express = require('express');
const { validateSignup } = require('../validation');
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
