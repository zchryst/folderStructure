import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/components/folder.scss'

class Folder extends React.Component {



  render() {
    const { name, children = null } = this.props;

    return (
      <div className={styles.mainContainer}>
        <div>
          folder: {name}
        </div>

        {children && (
          <div className={styles.children}>
            {children}
          </div>
        )}
      </div>
    )
  }
}

Folder.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
};

export default Folder;
