const express = require('express');
const router = express.Router();

// GET معلومات عن المتجر
router.get('/', (req, res) => {
  res.json({
    storeName: 'My Book Store',
    location: 'Online',
    owner: 'Abdallah'
  });
});

module.exports = router;
