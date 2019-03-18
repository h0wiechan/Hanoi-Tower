import React from 'react';
import { connect } from 'react-redux';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import { setEndTower } from '../actions/game_actions'; 
import { createArrayOfLength } from '../util/general_util';
import { towersAreChanged } from '../util/game_util';
import Tower from './tower';
import Modal from './modal';

const msp = (state) => ( state.game );

const mdp = (dispatch) => ({
  setEndTower: (tower) => dispatch(setEndTower(tower)),
});

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      discsNum: this.props.discsNum
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({loaded: true}), this.props.delay);
  }

  componentWillReceiveProps(nextProps) {
    debugger
    if (this.props.discsNum !== nextProps.discsNum || towersAreChanged(this.props.status, nextProps.status)) {
      debugger
      this.setState({ discsNum: nextProps.discsNum });
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return true;
  // }
  
  // componentWillUpdate(nextProps, nextState) {
  // }

  startGame() {
    return (
      createArrayOfLength(3).map((n) => (
        <Tower key={n} 
               idx={n} 
               delay={this.props.delay + 500}
               totalDiscsNum={this.state.discsNum} 
               noOfDiscs={n === 0 ? this.state.discsNum : 0} 
               setEndTower={(tower) => this.props.setEndTower(tower)}
               />
      ))
    );
  }
    
  render() {
    return (
      <div id="playground" className={this.state.loaded ? '' : 'hidden'}>
        {this.startGame()}
        <Modal klass="loading"/>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(connect(msp, mdp)(Game));