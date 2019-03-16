import React from 'react';
import { connect } from 'react-redux'

const msp = (state) => (state.game);

const mdp = (dispatch) => ({
  
});

class Button extends React.Component {
  render() {
    return (
      <button className="game-starter">{this.props.klass}</button>
    );
  }
}

export default connect(msp, mdp)(Button);