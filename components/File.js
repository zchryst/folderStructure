import React from 'react';
import PropTypes from 'prop-types';

const File = (props) => {
  const { name } = props;

  return(
    <div>
      <div>
        file: {name}
      </div>
    </div>
  )
};

File.propTypes = {
  name: PropTypes.string,
};

export default File;
