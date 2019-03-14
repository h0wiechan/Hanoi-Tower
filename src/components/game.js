import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Tower from './tower';
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.noOfDiscs = 3;
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({loaded: true}), this.props.delay);
  }

  startGame() {
    return (
      [0, 1, 2].map((n) => (
        <Tower key={n} delay={this.props.delay + 500} noOfDiscs={n === 0 ? this.noOfDiscs : 0}/>
      ))
    );
  }
    
  render() {
    return (
      <div id="playground" className={this.state.loaded ? '' : 'hidden'}>
        {this.startGame()}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Game);