import PropTypes from 'prop-types';
import React from 'react';

const OpenFolderIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 503 503" className={className}>
    <path fill="#c39a6e" d="M406 136.7a35.4 35.4 0 0 0-35.2-35.3h-106l-44.1-53h-159c-15 0-26.4 12.4-26.4 26.5v61.8h370.8z"/>
    <path fill="#fbc176" d="M459 163.2v264.9a26 26 0 0 1-26.4 26.4H26.5A26 26 0 0 1 0 428.1V163.2a26 26 0 0 1 26.5-26.5h406a27.2 27.2 0 0 1 26.5 26.5"/>
    <path fill="#c39a6e" d="M467.9 172c22 0 38.8 21.2 34.4 42.4L459 419.2V172.1h8.9z"/>
    <g fill="#fff">
      <path d="M158.9 198.5h-106c-5.2 0-8.8-3.5-8.8-8.8s3.6-8.8 8.9-8.8h105.9c5.3 0 8.8 3.5 8.8 8.8s-3.5 8.8-8.8 8.8M158.9 233.8h-106c-5.2 0-8.8-3.5-8.8-8.8s3.6-8.8 8.9-8.8h105.9c5.3 0 8.8 3.5 8.8 8.8s-3.5 8.8-8.8 8.8"/>
    </g>
  </svg>
);

OpenFolderIcon.propTypes = {
  className: PropTypes.string,
};

export default OpenFolderIcon;
