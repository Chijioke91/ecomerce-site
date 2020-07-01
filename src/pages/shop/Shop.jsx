import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shopActions';
import CollectionOverviewContainer from '../../components/collection-overview/CollectionOverviewContainer';
import CollectionContainer from '../collection/CollectionContainer';

class Shop extends Component {
  componentDidMount() {
    this.props.fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />

        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    );
  }
}

export default connect(null, { fetchCollectionsStartAsync })(Shop);
