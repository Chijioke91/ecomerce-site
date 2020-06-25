import React from 'react';
import './Directory.scss';
import MenuItem from '../menu-item/MenuItem';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map((item) => (
        <MenuItem item={item} key={item.id} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
