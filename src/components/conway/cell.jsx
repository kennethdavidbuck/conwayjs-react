import React from 'react';

/*global L*/

class App extends React.Component {

  render() {
    return (
      <td>
        <input
          readOnly
          onClick={() => {this.props.toggleCell(this.props.rowIndex, this.props.columnIndex)}}
          type="checkbox"
          className={`conway-cell ${this.props.cell ? 'alive' : ''}`}
          checked={this.props.cell}/>
      </td>
    );
  }
}

export default App;