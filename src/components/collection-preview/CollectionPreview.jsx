import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer,
} from './CollectionPreviewStyle';

const CollectionPreview = ({ collection: { items, title } }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
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

export default CollectionPreview;
