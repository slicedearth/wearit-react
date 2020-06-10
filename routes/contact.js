// IMPORTS
const express = require('express');
const nodemailer = require('nodemailer');
const Joi = require('@hapi/joi');
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
  const validateEmail = (email) => {
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
      subject: Joi.string().required().messages({
        'string.base': `Invalid Subject!'`,
        'string.empty': `Please select a subject.`,
        'any.required': `Please provide a subject.`,
      }),
      message: Joi.string().min(10).max(999).required().messages({
        'string.base': `Invalid Message!`,
        'string.empty': `Message cannot be empty.`,
        'string.min': `Message must be at least {#limit} characters long.`,
        'string.max': `Message cannot exceed {#limit} characters.`,
        'any.required': `Message is a required field. Please enter a message.`,
      }),
    });
    return schema.validate(email);
  };
  const { error } = validateEmail(req.body);
  if (error) {
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

  const validateTxt = (sms) => {
    const schema = Joi.object({
      number: Joi.string()
        .pattern(/^[0-9]+$/)
        .min(5)
        .max(20)
        .required()
        .messages({
          'string.pattern.base': `Phone number must contain numerical characters only`,
          'string.empty': `Phone number cannot be empty.`,
          'string.min': `Phone number must be at least {#limit} characters long.`,
          'string.max': `Phone number cannot exceed {#limit} characters.`,
          'any.required': `Phone number is a required field. Please enter a message.`,
        }),
      txtMessage: Joi.string().min(5).max(256).required().messages({
        'string.base': `"a" should be a type of 'text'`,
        'string.empty': `Message cannot be empty.`,
        'string.max': `Message cannot exceed {#limit} characters.`,
        'any.required': `Message is a required field. Please enter a message.`,
      }),
    });
    return schema.validate(sms);
  };
  const { error } = validateTxt(req.body);
  if (error) {
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

      // FAILED FIX
      // try {
      //   // console.log(res.status());
      //   if (res.status === 200) {
      //     res.status(200).send('SMS Sent!');
      //   } else {
      //     console.log('SMS Failed!');
      //     console.log(responseData);

      //     res
      //       .status(500)
      //       .send(
      //         `SMS Failed! ERROR: ${err}`
      //       );
      //   }
      // } catch (err) {
      //   console.log('TEXT ' + err);
      //   res.status(400).send(err);
      // }
    }
  );
});

module.exports = router;
