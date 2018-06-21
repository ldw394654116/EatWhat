import React from 'react';
import Turn from './Turn'
require('./App.css');

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <main>
      <h1>今天吃什么</h1>
      <Turn />
      </main>
    );
  }
}

export default App
