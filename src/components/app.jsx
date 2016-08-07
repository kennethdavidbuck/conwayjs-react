import React from 'react';
import Row from './conway/row';
import Conway from 'conwayjs';

class App extends React.Component {

  constructor(props) {
    super(...arguments);
    this.game = new Conway(Conway.createBoard({
      width: 25,
      height: 25
    }));
    this.state = { board: this.game.board };
    this.wait = 250;
  }

  render() {
    const rows = this.state.board.map((row, index) => (
      <Row
        key={index}
        rowIndex={index}
        cells={row}
        toggleCell={this.handleToggleCell.bind(this)}/>
    ));

    return (
     <table>
      <tbody>{rows}</tbody>
     </table>
    );
  }

  componentDidMount() {
    this.run(this.wait);
  }

  run(wait = 0) {
    setTimeout(() => {
      this.next();
      this.run(this.wait);
    }, wait);
  }

  next() {
    this.game = this.game.next();
    this.setState({
      board: this.game.board
    });
  }

  handleToggleCell(rowIndex, columnIndex) {
    this.game.toggleCell(rowIndex, columnIndex);
    this.setState(this.game.board);
  }
}

export default App;