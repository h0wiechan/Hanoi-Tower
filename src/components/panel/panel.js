import React from 'react';
import { connect } from 'react-redux'
import Info from './info';
import Button from '../button';

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
          <Button klass='restart'/>
        </div>
      </div>
    );
  }
}

export default connect(msp, mdp)(Panel);