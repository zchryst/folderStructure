import React from 'react';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';

import File from '../components/File/File';
import Folder from '../components/Folder/Folder';

import styles from './styles/index.scss';

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

  static countFiles(array, count = 0) {
    array.forEach((node) => {
      if (node.type === "file") {
        count += 1;
      } else if (node.type === "folder") {
        count += this.countFiles(node.children);
      }
    });

    return count;
  }


  render() {
    const { data } = this.props;

    const jsxStructure = [];
    data.forEach((node) => jsxStructure.push(Index.buildStructure(node)));

    const fileCount = Index.countFiles(data);

    console.log(data);

    return (
      <div className={styles.indexPage}>
        {jsxStructure}

        <div className={styles.count}>
          <h4>
            File count: {fileCount}
          </h4>
        </div>
      </div>
    )
  }
}

Index.propTypes = {
  data: PropTypes.array,
};

export default Index;
