import React from 'react';
import Row from './row';
import Conway from 'conwayjs';

class App extends React.Component {

  constructor(props) {
    super(...arguments);

    this.game = new Conway(Conway.createBoard({
      width: 25,
      height: 25
    }));
    this.state = {
      isPlaying: false,
      wait: 300,
      board: this.game.board
    };
  }

  componentDidMount() {
    this.run(this.state.wait);
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
        <caption>
          <button onClick={this.state.isPlaying ? this.handlePause.bind(this) : this.handlePlay.bind(this)}>
            {this.state.isPlaying ? 'Pause' : 'Play'}
          </button>
          <button onClick={this.handleReset.bind(this)}>
            Reset
          </button>
        </caption>
        <tbody>{rows}</tbody>
      </table>
    );
  }

  run(wait = 0) {
    setTimeout(() => {
      if(this.state.isPlaying) {
        this.next();
      }
      this.run(this.state.wait);
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

  handleReset() {
    this.game = new Conway(Conway.createBoard({
      width: 25,
      height: 25
    }));

    this.setState({
      board: this.game.board
    });
  }

  handlePlay() {
    this.setState({
      isPlaying: true
    });
  }

  handlePause() {
    this.setState({
      isPlaying: false
    });
  }
}

export default App;