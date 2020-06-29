import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cartActions';
import {
  CollectionItemContainer,
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
} from './CollectionItemStyles';

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default connect(null, { addItem })(CollectionItem);
