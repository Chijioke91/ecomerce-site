import React from 'react';
import { connect } from 'react-redux';
import { clearItem, addItem, removeItem } from '../../redux/cart/cartActions';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  RemoveButtonContainer,
  QuantityContainer,
} from './CheckoutItemContainerStyle';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { id, name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer
        onClick={() => clearItem(id)}
        className="remove-button"
      >
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default connect(null, { clearItem, addItem, removeItem })(CheckoutItem);
