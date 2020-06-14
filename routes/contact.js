// THIRD PARTY IMPORTS
const express = require('express');
const nodemailer = require('nodemailer');
const Nexmo = require('nexmo');
// CUSTOM IMPORTS
const { validateTxt, validateEmail } = require('../validation');

// LOAD ROUTER
const router = express.Router();

// POST EMAIL ROUTE
router.post('/email', (req, res, next) => {
  console.log(req.body);
  // EMAIL VALIDATION
  const { error } = validateEmail(req.body);
  // IF THERE IS A VALIDATION ERROR...
  if (error) {
    // SEND A 400 STATUS CODE WITH ERROR MESSAGE
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

  // SEND EMAIL USING NODEMAILER
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

module.exports = router;
