// IMPORTS
const express = require('express');
const nodemailer = require('nodemailer');
const request = require('request');
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
      return console.log('Errors: ', error);
    } else {
      console.log('Message sent: %s', info.messageId);
      console.log('Email sent successfully');
    }
  });
});

// POST SMS ROUTE
router.post('/sms', (req, res) => {
  res.send(req.body);
  console.log(req.body);
  const number = req.body.number;
  const text = req.body.txtMessage;
  nexmo.message.sendSms(
    'Nexmo API APP',
    number,
    text,
    { type: 'unicode' },
    (err, responseData) => {
      if (err) {
        console.log('TEXT' + err);
      } else {
        console.dir(responseData);
        // const data = {
        //   id: responseData.messages[0]['message-id'],
        //   number: responseData.messages[0]['to'],
        // };
        const data = 'Test';
        console.log(data);
      }
    }
  );
});

module.exports = router;
