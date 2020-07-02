const path = require('path');
const express = require('express');
const cors = require('cors');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// server static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.post('/payment', (req, res) => {
  const { token, amount } = req.body;
  const body = {
    source: token.id,
    amount,
    currency: 'usd',
  };

  stripe.charges.create(body, (err, charge) => {
    if (err) {
      res.status(500).send({ error: err.message });
    } else {
      res.status(200).json({ success: charge });
      console.log(charge);
    }
  });
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on port ${port}`
  );
});
