// IMPORTS
const express = require('express');
const nodemailer = require('nodemailer');

// LOAD ROUTER
const router = express.Router();

// POST EMAIL ROUTE
router.post('/api/form', (req, res, next) => {
  console.log(req.body);
  // EMAIL CONTENT
  const output = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>
          <li>Name: ${req.body.name}</li>
          <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message Text:</h3>
        <p>${req.body.message}</p>
        `;

  // GMAIL ACCOUNT EXAMPLE
  // const transporter = nodemailer.createTransport({
  //   host: 'smtp.gmail.com',
  //   port: 587,
  //   secure: false,
  //   auth: {
  //     user: process.env.EMAIL,
  //     pass: process.env.PASS
  //   },
  //   tls: {
  //     rejectUnauthorized: false
  //   }
  // });

  // ETHEREAL EMAIL ACCOUNT
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  // SET EMAIL OPTIONS
  let mailOptions = {
    from: process.env.EMAIL,
    to: 'dummyemail@notarealemailaddress.com',
    subject: 'Node Contact Request',
    html: output,
  };

  // SEND EMAIL
  transporter.sendMail(mailOptions, (error, info) => {
    console.log('sending email...');
    if (error) {
      return console.log('Errors: ', error);
    } else {
      console.log('Message sent: %s', info.messageId);
      console.log('Email sent successfully');
    }
  });
});
module.exports = router;
