import React from 'react';
import './CollectionOverview.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/CollectionPreview';

const CollectionOverview = ({ collections }) => {
  return (
    <div>
      {collections.map((collection) => (
        <CollectionPreview key={collection.id} collection={collection} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
