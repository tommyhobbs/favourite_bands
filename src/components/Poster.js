import React from 'react';
import PropTypes from 'prop-types';

function Poster(props) {
  const posterStyle = {
    background: 'url(' + props.poster + ') center / cover',
    height: '256px',
    width: '256px',
  };
  const textStyle = {
    'color': '#fff',
    'fontSize': '14px',
    'fontWeight': 500,
  };
  const style = {
    background: 'rgba(0, 0, 0, 0.2)',
    height: '52px',
    padding: '16px',
  };

  return <div className="demo-card-image mdl-card mdl-shadow--2dp"
    style={posterStyle}>
    <div className="mdl-card__title mdl-card--expand" />
    <div className="mdl-card__actions" style={style}>
      <span className="demo-card-image__filename" style={textStyle}>{props.name}
        ({props.popularity})</span>
    </div>
  </div>;
}

Poster.propTypes = {
  name: PropTypes.string,
  popularity: PropTypes.number,
  poster: PropTypes.string,
};

export default Poster;
