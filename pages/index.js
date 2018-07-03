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

  static buildStructure(node) {
    if (node.type === "file") {
      return <File name={node.name} />
    } else if (node.type === "folder") {
      const subFiles = [];
      node.children.forEach((subNode) => subFiles.push(this.buildStructure(subNode)));
      return <Folder name={node.name} children={subFiles} />
    }
  }


  render() {
    const { data } = this.props;

    const jsxStructure = [];
    data.forEach((node) => jsxStructure.push(Index.buildStructure(node)));

    console.log(data);

    return (
      <div>
        <p>Hello World</p>

        <File name="cute file" />

        <Folder name="big scary folder"/>

        <Folder name="father folder" children={<div>waaaahhhh!</div>}/>

        {jsxStructure}
      </div>
    )
  }
}

Index.propTypes = {
  data: PropTypes.array,
};

export default Index;
