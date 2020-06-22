import React, { Component } from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map((collection) => (
          <CollectionPreview key={collection.id} collection={collection} />
        ))}
      </div>
    );
  }
}

export default Shop;
