import React from 'react';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import { Route } from 'react-router-dom';
import Collection from '../collection/Collection';

const Shop = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route exact path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default Shop;
