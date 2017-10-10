import React from 'react';
import PropTypes from 'prop-types';

function Artist(props) {
  return (
    <li className="mdl-list__item">
      <span className="mdl-list__item-primary-content">
        <i className="material-icons mdl-list__item-icon">music_note</i>
        {props.name} ({props.popularity})
      </span>
    </li>
  );
}

Artist.propTypes = {
  name: PropTypes.string,
  popularity: PropTypes.number,
};

export default Artist;
