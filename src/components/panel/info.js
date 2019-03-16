import React from 'react';
import { connect } from 'react-redux';

const msp = (state) => (state.game);

const mdp = (dispatch) => ({
  
});

class Info extends React.Component {
  renderValueContainer() {
    switch(this.props.klass) {
      case 'discs':
        return (
          <div id='value-container'>
            <p className='label'>{this.props.discsNum}</p>
            <div id='discs-controller'>
              <p className='controller'>+</p>
              <p className='controller'>-</p>
            </div>
          </div>
        );
      case 'moves':
        return (
          <p className='label'>{`${this.props.moves} (${this.props.minMoves})`}</p>
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
      <div className='info' style={this.props.klass === 'discs' ? { paddingBottom: '1rem' } : {}}>
        <p className='label'>{this.label}</p>
        {this.renderValueContainer()}
      </div>
    );
  }
}

export default connect(msp, mdp)(Info);