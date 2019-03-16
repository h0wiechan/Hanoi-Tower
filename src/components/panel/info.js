import React from 'react';
import { connect } from 'react-redux';

const msp = (state) => (state.game);

const mdp = (dispatch) => ({
  
});

class Info extends React.Component {
  constructor(props) {
    super(props);
  }
  renderValueContainer() {
    switch(this.props.klass) {
      case 'discs':
        return (
          <div id='value-container'>
            <p>{this.props.discsNum}</p>
            <div>
              <p>+</p>
              <p>-</p>
            </div>
          </div>
        );
      case 'moves':
        return (
          <p>{`${this.props.moves} (${this.props.minMoves})`}</p>
        );
    }
  }

  render() {
    switch (this.props.klass) {
      case 'discs':
        this.label = 'Discs';
        break;
      case 'moves':
        this.label = 'Moves (Min. moves)';
        break;
      default:
        break;
    }
    return (
      <div class='info'>
        <p class='label'>{this.label}</p>
        {this.renderValueContainer()}
      </div>
    );
  }
}

export default Info;