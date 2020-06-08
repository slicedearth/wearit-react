// IMPORTS
const express = require('express');
// LOAD ROUTER
const router = express.Router();

// SERVER STATUS ROUTE
router.get('/', (req, res) => {
  res.send('Server is running!');
});

module.exports = router;
