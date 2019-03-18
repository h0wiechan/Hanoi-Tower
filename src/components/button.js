import React from 'react';
import { connect } from 'react-redux'
import { restartGame } from '../actions/game_actions'

const msp = (state) => (state.game);

const mdp = (dispatch) => ({
  restartGame: () => dispatch(restartGame()),
});

class Button extends React.Component {
  render() {
    return (
      <button className="game-starter" onClick={() => this.props.restartGame()}>{this.props.klass}</button>
    );
  }
}

export default connect(msp, mdp)(Button);