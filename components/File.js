import React from 'react';
import PropTypes from 'prop-types';

const File = (props) => {
  const { name } = props;

  return(
    <div>
      <p>
        file: {name}
      </p>
    </div>
  )
};

File.propTypes = {
  name: PropTypes.string,
};

export default File;
