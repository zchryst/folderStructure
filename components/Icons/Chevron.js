import PropTypes from 'prop-types';
import React from 'react';

const ChevronIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404.3 404.3" className={className}>
    <path fill="#070817" d="M386.3 114.3L202.1 252.4 18 114.3l-18 24 202.1 151.6 202.2-151.6z"/>
  </svg>
);

ChevronIcon.propTypes = {
  className: PropTypes.string,
};

export default ChevronIcon;
