import React from 'react';
import { connect } from 'react-redux';

const msp = (state) => (state.game);

const mdp = (dispatch) => ({
  
});

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    }
  }
    
  renderValueContainer() {
    switch(this.props.klass) {
      case 'discs':
        return (
          <div id='value-container'>
            <p className='label'>{this.props.discsNum}</p>
            <div id='discs-controller'>
              <p className='controller'>+</p>
              <p className='controller' style={{transform: 'scale(1.7)'}}>-</p>
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
      <div className='info' onMouseEnter={() => this.setState({ hovered: true })} onMouseLeave={() => this.setState({ hovered: false })}  style={this.props.klass === 'discs' ? { paddingBottom: '1rem' } : {}}>
        <p className={this.state.hovered ? 'label hovered' : 'label'}>{this.label}</p>
        {this.renderValueContainer()}
      </div>
    );
  }
}

export default connect(msp, mdp)(Info);