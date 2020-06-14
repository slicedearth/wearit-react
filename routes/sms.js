const express = require('express');
const Nexmo = require('nexmo');
// CUSTOM IMPORTS
const { validateTxt } = require('../validation');

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

// POST SMS ROUTE
router.post('/', (req, res) => {
  // res.send(req.body);
  console.log(req.body);

  // SMS VALIDATION
  const { error } = validateTxt(req.body);
  // IF THERE IS A VALIDATION ERROR...
  if (error) {
    // SEND A 400 STATUS CODE WITH ERROR MESSAGE
    return res.status(400).send(error.details[0].message);
    // return console.log(valErr.details[0].message);
  }
  const number = req.body.number;
  const text = req.body.txtMessage;

  // SEND SMS USING NEXMO
  nexmo.message.sendSms(
    'Nexmo API APP',
    number,
    text,
    { type: 'unicode' },
    (err, responseData) => {
      // IF THERE IS AN ERROR...
      if (err) {
        console.log('TEXT ' + err);
        // SEND A 400 STATUS CODE WITH ERROR MESSAGE
        return res.status(400).send(err);
      } else {
        // IF MESSAGE IS SENT SUCCESSFULLY
        if (responseData.messages[0]['status'] === '0') {
          console.log('Message sent successfully.');
          return res.status(200).send('SMS Sent!');
        } else {
          console.log(
            `Message failed with error: ${responseData.messages[0]['error-text']}`
          );
          // SEND A 500 STATUS CODE WITH ERROR MESSAGE
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
