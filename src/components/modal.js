import React from 'react';
import { connect } from 'react-redux';
import Loader from '../assets/images/loader.gif'

const msp = (state) => ( state.modal )

class Modal extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isActive: true,
    // }
    this.noneStyle = {
      display: 'none',
    }
  }
  
//   componentWillReceiveProps(nextProps) {
//     if (this.props.isActive !== nextProps.isActive) {
//       this.setState({
//         isActive: nextProps.isActive
//       })
//     }
//   }

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
      <div id="modal-container" style={this.props.mode ? {}: this.noneStyle}>
        {this.renderModal()}
      </div>
    );
  }
}

export default connect(msp, null)(Modal);