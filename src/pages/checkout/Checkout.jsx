import React from 'react';
import './Checkout.scss';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartPriceTotal,
} from '../../redux/cart/cart.selector';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeCheckoutButton from '../../components/stripe-button/StripCheckoutButton';

const Checkout = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">TOTAL: ${total}</div>

      <div className="test-warning">
        *Please use the following test card info to test*
        <br />
        4242 4242 4242 4242 - Exp 01/21 - CVV-123
      </div>

      <StripeCheckoutButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartPriceTotal,
});

export default connect(mapStateToProps)(Checkout);
