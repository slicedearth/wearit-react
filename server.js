// IMPORTS
require('dotenv').config();
const express = require('express');
const request = require('request');

// LOAD EXPRESS
const app = express();

// MIDDLEWARE

// BODY PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.get('/', (req, res) => {
  res.send('Home Page');
});

// NEWSLETTER SIGN UP ROUTE
app.post('/newsletter', (req, res) => {
  // console.log(req.body);
  const { firstName, lastName, email } = req.body;
  console.log(firstName + ' ' + lastName);
  console.log(email);

  // CHECKS IF FIELDS ARE FILLED
  if (!firstName || !lastName || !email) {
    res
      .status(400)
      .send('Please ensure that all fields have been filled out correctly!');
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

  // MAILCHIMP REQUEST
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

// PORT VARIABLE
const port = process.env.PORT || 5000;

// START SERVER ON ASSIGNED PORT
app.listen(port, console.log(`Server started on port: ${PORT}...`));
