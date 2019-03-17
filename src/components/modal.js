import React from 'react';
import { connect } from 'react-redux';
import Loader from '../assets/images/loader.gif'

const msp = (state) => ( state.game )

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.noneStyle = {
      display: 'none',
    }
  }

  renderModal() {
    switch(this.props.klass) {
      case 'loading':
        return <img id="loader" src={Loader}></img>;
      case 'game-over':
      default:
        return ;
    }
  }

  render() {
    return (
      <div id="modal-container" style={this.props.isActive ? this.noneStyle : {}}>
        {this.renderModal()}
      </div>
    );
  }
}

export default connect(msp, null)(Modal);