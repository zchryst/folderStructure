import React from 'react';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';

import File from '../components/File';
import Folder from '../components/Folder';

class Index extends React.Component {

  static async getInitialProps() {
    const res = await fetch('https://chal-aqkyeedcpl.now.sh/');
    const data = await res.json();

    console.log('got structure:');
    console.log(data);

    return data;
  };


  render() {
    const { data } = this.props;

    console.log(data);

    return (
      <div>
        <p>Hello World</p>

        <File name="cute file" />

        <Folder name="big scary folder"/>

        <Folder name="father folder" children={<div>waaaahhhh!</div>}/>
      </div>
    )
  }
}

Index.propTypes = {
  data: PropTypes.object,
};

export default Index;
