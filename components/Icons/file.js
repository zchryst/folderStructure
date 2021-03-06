import PropTypes from 'prop-types';
import React from 'react';

const FileIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 503.3 503.3" className={className}>
    <path fill="#d4d0ba" d="M433.9 104.1h-86.8c-9.5 0-17.3-7.8-17.3-17.3V0l104.1 104.1z"/>
    <path fill="#efeadd" d="M433.9 104.1h-86.8c-9.5 0-17.3-7.8-17.3-17.3V0h-243c-9.6 0-17.4 7.8-17.4 17.4V486c0 9.5 7.8 17.3 17.4 17.3h329.7c9.6 0 17.4-7.8 17.4-17.3V104z"/>
    <g fill="#d4d0ba">
      <path d="M277.7 112.8H121.5c-5.2 0-8.7-3.5-8.7-8.7 0-5.2 3.5-8.6 8.7-8.6h156.2c5.2 0 8.7 3.4 8.7 8.6 0 5.2-3.5 8.7-8.7 8.7M381.8 164.9H121.5c-5.2 0-8.7-3.5-8.7-8.7 0-5.2 3.5-8.7 8.7-8.7h260.3c5.2 0 8.7 3.5 8.7 8.7 0 5.2-3.5 8.7-8.7 8.7M381.8 217H121.5c-5.2 0-8.7-3.5-8.7-8.7 0-5.2 3.5-8.7 8.7-8.7h260.3c5.2 0 8.7 3.5 8.7 8.7 0 5.2-3.5 8.6-8.7 8.6M381.8 269H121.5c-5.2 0-8.7-3.5-8.7-8.7s3.5-8.6 8.7-8.6h260.3c5.2 0 8.7 3.4 8.7 8.6s-3.5 8.7-8.7 8.7M381.8 321H121.5c-5.2 0-8.7-3.4-8.7-8.6 0-5.2 3.5-8.7 8.7-8.7h260.3c5.2 0 8.7 3.5 8.7 8.7 0 5.2-3.5 8.7-8.7 8.7M381.8 373.2H121.5c-5.2 0-8.7-3.5-8.7-8.7s3.5-8.7 8.7-8.7h260.3c5.2 0 8.7 3.5 8.7 8.7s-3.5 8.7-8.7 8.7M381.8 425.2H121.5c-5.2 0-8.7-3.5-8.7-8.7 0-5.2 3.5-8.6 8.7-8.6h260.3c5.2 0 8.7 3.4 8.7 8.6 0 5.2-3.5 8.7-8.7 8.7"/>
    </g>
  </svg>
);

FileIcon.propTypes = {
  className: PropTypes.string,
};

export default FileIcon;
