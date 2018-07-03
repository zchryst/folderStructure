import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import ClosedFolderIcon from '../Icons/closedFolder';
import OpenFolderIcon from '../Icons/openFolder';
import ChevronIcon from '../Icons/Chevron';

import styles from './styles.scss'

class Folder extends React.Component {


  render() {
    const { name, children = [] } = this.props;

    console.log(children.length);

    return (
      <div>
        <div className={styles.row}>
          {children.length !== 0 ? (
            <Fragment>
              <ChevronIcon className={styles.chevron}/>
              <OpenFolderIcon className={styles.icon} />
            </Fragment>
            )
            : (
              <Fragment>
                <ChevronIcon className={styles.chevronClosed} />
                <ClosedFolderIcon className={styles.icon} />
              </Fragment>
            )}
          <span className={styles.name}>
            {name}
          </span>
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
