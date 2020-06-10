// IMPORTS
const express = require('express');
const nodemailer = require('nodemailer');
const { validateTxt, validateEmail } = require('../validation');
const Nexmo = require('nexmo');

// LOAD ROUTER
const router = express.Router();

// NEXMO CONNECTION
const nexmo = new Nexmo(
  {
    apiKey: process.env.NEXMO_API_KEY,
    apiSecret: process.env.NEXMO_API_SECRET,
  },
  { debug: true }
);

// POST EMAIL ROUTE
router.post('/email', (req, res, next) => {
  console.log(req.body);
  // EMAIL VALIDATION
  const { error } = validateEmail(req.body);
  // CHECK IF THERE ARE ANY VALIDATION ERRORS
  if (error) {
    // RETURN ERROR MESSAGE
    return res.status(400).send(error.details[0].message);
    // return console.log(error.details[0].message);
  }
  // EMAIL CONTENT
  const output = `
        <h1>Contact Form Enquiry</h1>
        <br/>
        <h3>Subject</h3>
        <p>${req.body.subject}</p>
        <h3>Contact Details</h3>
        <ul>
          <li>Name: ${req.body.firstName} ${req.body.lastName}</li>
          <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        `;

  // ETHEREAL EMAIL ACCOUNT
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: process.env.NODEMAIL_ADDRESS,
      pass: process.env.NODEMAIL_PASSWORD,
    },
  });

  // SET EMAIL OPTIONS
  let mailOptions = {
    from: process.env.EMAIL,
    to: 'dummyemail@notarealemailaddress.com',
    subject: `${req.body.email} - ${req.body.subject}`,
    html: output,
  };

  // SEND EMAIL
  transporter.sendMail(mailOptions, (error, info) => {
    console.log('sending email...');
    if (error) {
      console.log('Errors: ', error);
      return res.status(500).send('Errors: ' + error);
    } else {
      console.log('Message sent: %s', info.messageId);
      console.log('Email sent successfully');
      return res
        .status(200)
        .send(`Message sent with message ID: ${info.messageId}`);
    }
  });
});

// POST SMS ROUTE
router.post('/sms', (req, res) => {
  // res.send(req.body);
  console.log(req.body);

  // SMS VALIDATION
  const { error } = validateTxt(req.body);
  // CHECK IF THERE ARE ANY VALIDATION ERRORS
  if (error) {
    // RETURN ERROR MESSAGE
    return res.status(400).send(error.details[0].message);
    // return console.log(valErr.details[0].message);
  }
  const number = req.body.number;
  const text = req.body.txtMessage;
  nexmo.message.sendSms(
    'Nexmo API APP',
    number,
    text,
    { type: 'unicode' },
    (err, responseData) => {
      if (err) {
        console.log('TEXT ' + err);
        return res.status(400).send(err);
      } else {
        if (responseData.messages[0]['status'] === '0') {
          console.log('Message sent successfully.');
          return res.status(200).send('SMS Sent!');
        } else {
          console.log(
            `Message failed with error: ${responseData.messages[0]['error-text']}`
          );
          return res
            .status(500)
            .send(
              `SMS Failed! ERROR: ${responseData.messages[0]['error-text']}`
            );
        }
      }
    }
  );
});

module.exports = router;
