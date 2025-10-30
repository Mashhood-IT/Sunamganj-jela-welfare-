const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

router.post('/create-payment-intent', async (req, res) => {
  const { amount, currency, name, email, isRecurring } = req.body;
    const allowedCurrencies = ['gbp', 'usd', 'eur'];
  if (!allowedCurrencies.includes(currency?.toLowerCase())) {
    return res.status(400).json({ error: 'Invalid currency' });
  }
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(Number(amount) * 100),
       currency: currency.toLowerCase(),
      receipt_email: email,
      metadata: { name, isRecurring: isRecurring ? 'true' : 'false' },
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
