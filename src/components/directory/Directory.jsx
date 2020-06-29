import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import { DirectoryMenuContainer } from './DirectoryStyles';

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {sections.map((item) => (
        <MenuItem item={item} key={item.id} />
      ))}
    </DirectoryMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
