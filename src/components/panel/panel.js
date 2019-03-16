import React from 'react';
import { connect } from 'react-redux'
import Info from './info';

const msp = (state) => (state.game);

const mdp = (dispatch) => ({
  
});

class Panel extends React.Component {
  render() {
    return (
      <div id='panel'>
        <div id='game-info'>
          <Info klass='discs'/>
          <Info klass='moves'/>
        </div>
        <div id='buttons'>
          <button>RESTART</button>
        </div>
      </div>
    );
  }
}

export default connect(msp, mdp)(Panel);