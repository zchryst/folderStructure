import PropTypes from 'prop-types';
import React from 'react';

const ClosedFolderIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={className}>
    <path fill="#fbc176" d="M0 167.7v264.9A26 26 0 0 0 26.5 459h459a26 26 0 0 0 26.5-26.4V167.7a26 26 0 0 0-26.5-26.5h-459c-15 0-26.5 12.4-26.5 26.5"/>
    <path fill="#c39a6e" d="M467.9 141.2a35.4 35.4 0 0 0-35.3-35.3H291.3l-44.1-53H53c-15 0-26.5 12.4-26.5 26.5v61.8h441.4z"/>
    <g fill="#fff">
      <path d="M158.9 203h-106c-5.2 0-8.8-3.5-8.8-8.8s3.6-8.8 8.9-8.8h105.9c5.3 0 8.8 3.5 8.8 8.8s-3.5 8.8-8.8 8.8M158.9 238.3h-106c-5.2 0-8.8-3.5-8.8-8.8s3.6-8.8 8.9-8.8h105.9c5.3 0 8.8 3.5 8.8 8.8s-3.5 8.8-8.8 8.8"/>
    </g>
  </svg>
);

ClosedFolderIcon.propTypes = {
  className: PropTypes.string,
};

export default ClosedFolderIcon;
