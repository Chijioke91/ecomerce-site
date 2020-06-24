import React from 'react';
import './CartDropdown.scss';
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cartActions';

const CartDropdown = ({ cartItems, toggleCartHidden, history }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem item={item} key={item.id} />)
        ) : (
          <span className="empty-message">You Cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          toggleCartHidden();
        }}
      >
        Go To Checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(
  connect(mapStateToProps, { toggleCartHidden })(CartDropdown)
);
