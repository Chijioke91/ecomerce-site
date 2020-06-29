import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from './CartDropdownStyles';

const CartDropdown = ({ cartItems, toggleCartHidden, history }) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem item={item} key={item.id} />)
        ) : (
          <EmptyMessageContainer>You Cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          history.push('/checkout');
          toggleCartHidden();
        }}
      >
        Go To Checkout
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(
  connect(mapStateToProps, { toggleCartHidden })(CartDropdown)
);
