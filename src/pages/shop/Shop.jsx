import React, { Component } from 'react';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import { Route } from 'react-router-dom';
import Collection from '../collection/Collection';
import {
  firestore,
  convertCollectionsSnapshotsToMap,
} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shopActions';
import WithSpinner from '../../components/with-spinner/WithSpinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends Component {
  state = { loading: true };
  unsubscribeFromSnapshot = null;

  async componentDidMount() {
    const { updateCollections } = this.props;

    const collectionRef = firestore.collection('collections');

    const snapshot = await collectionRef.get();

    const collectionsMap = convertCollectionsSnapshotsToMap(snapshot);

    updateCollections(collectionsMap);

    this.setState({ loading: false });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />

        <Route
          exact
          path={`${this.props.match.path}/:collectionId`}
          render={(props) => (
            <CollectionWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

export default connect(null, { updateCollections })(Shop);
