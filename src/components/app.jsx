import React from 'react';
import Board from './conway/board';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Simple ReactJS App Using ConwayJS</h1>
        <Board/>
      </div>
    );
  }
}

export default App;