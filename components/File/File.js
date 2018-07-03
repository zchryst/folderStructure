import React from 'react';
import PropTypes from 'prop-types';

import FileIcon from '../Icons/file';

import styles from './styles.scss'

const File = (props) => {
  const { name } = props;

  return(
    <div className={styles.row}>
      <div className={styles.chevronSpacer} />
      <FileIcon className={styles.icon} />
      <span className={styles.name}>
        {name}
      </span>
    </div>
  )
};

File.propTypes = {
  name: PropTypes.string,
};

export default File;
