import { connect } from 'react-redux';
import { compose } from 'redux';
import CollectionOverview from './CollectionOverview';
import WithSpinner from '../with-spinner/WithSpinner';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
