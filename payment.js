const express = require('express');
const router = express.Router();

router.post('/verify', (req, res) => {
  // Simulate auto-payment detection logic for UPI, Bank transfer, and USD ($)
  const { paymentMethod } = req.body;
  if (['upi', 'bank', 'usd'].includes(paymentMethod)) {
    return res.status(200).json({ status: 'Payment detected', method: paymentMethod });
  }
  res.status(400).json({ status: 'Unsupported method' });
});

module.exports = router;