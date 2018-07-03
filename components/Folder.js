import React from 'react';
import PropTypes from 'prop-types';

class Folder extends React.Component {



  render() {
    const { name, children = null } = this.props;

    return (
      <div>
        <div>
          folder: {name}
        </div>

        {children && (
          <div>
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
