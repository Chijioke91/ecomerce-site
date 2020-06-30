import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer,
} from './CollectionPreviewStyle';
import { withRouter } from 'react-router-dom';

const CollectionPreview = ({
  collection: { items, title, routeName },
  history,
  match,
}) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, i) => i < 4)
          .map((item) => (
            <CollectionItem item={item} key={item.id} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
