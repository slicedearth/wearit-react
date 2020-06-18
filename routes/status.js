// THIRD PARTY IMPORTS
const express = require('express');

// LOAD ROUTER
const router = express.Router();

// SERVER STATUS ROUTE
router.get('/', (req, res) => {
  // SEND A MESSAGE THAT INDICATES THAT THE SERVER IS RUNNING
  res.send('The server is running!');
});

module.exports = router;
