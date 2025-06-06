const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  // Fake login logic for demo
  res.status(200).json({ success: true });
});

module.exports = router;