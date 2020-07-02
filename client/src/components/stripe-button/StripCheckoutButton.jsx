import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100;
  const stripePubKey = 'pk_test_OcZv4dvP5hENXGAE8gl41NIN0074zV7071';

  const onToken = async (token) => {
    axios({
      url: '/payment',
      method: 'post',
      data: {
        amount: stripePrice,
        token,
      },
    })
      .then((response) => alert('Payment Successful'))
      .catch((e) => alert('Failed payment, please check the credit card'));
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Ecommerce App"
      description={`Your Total is $${price}`}
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      amount={stripePrice}
      token={onToken}
      panelLabel="Pay Now"
      stripeKey={stripePubKey}
    />
  );
};

export default StripeCheckoutButton;
