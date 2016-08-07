import React from 'react';
import Cell from './cell';

/*global L*/

class App extends React.Component {

  constructor(props) {
    super(...arguments);
  }

  render() {
    const row = this.props.cells.map((cell, index) => <Cell key={index} cell={cell}/>);

    return (<tr>{row}</tr>);
  }
}

export default App;