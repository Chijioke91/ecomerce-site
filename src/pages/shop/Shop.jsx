import React, { Component } from 'react';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import { Route } from 'react-router-dom';
import Collection from '../collection/Collection';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shopActions';
import WithSpinner from '../../components/with-spinner/WithSpinner';
import { createStructuredSelector } from 'reselect';
import {
  selectIsCollectionFetching,
  selectIsCollectionLoaded,
} from '../../redux/shop/shop.selector';
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends Component {
  componentDidMount() {
    this.props.fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionLoaded } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />

        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionWithSpinner isLoading={!isCollectionLoaded} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetchingCollection: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded,
});

export default connect(mapStateToProps, { fetchCollectionsStartAsync })(Shop);
