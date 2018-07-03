import React from 'react';
import fetch from 'isomorphic-unfetch'


const Index = (props) => (
  <div>
    <p>Hello World</p>
    lol
  </div>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://chal-aqkyeedcpl.now.sh/');
  const data = await res.json();

  console.log('got structure:');
  console.log(data);

  return data;
};

export default Index;
