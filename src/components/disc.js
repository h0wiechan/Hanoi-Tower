import React from 'react';
import { connect } from 'react-redux';
import { activateGame } from '../actions/game_actions'
import { removeModal } from '../actions/modal_actions'
import { DragSource } from 'react-dnd';

const discSource = {
  beginDrag: (props) => {
    if (props.i > 0) return {};
    console.log('A')
    return {
      startTower: props.tower
    };
  },
  endDrag: (props, monitor, component) => {
    if (props.i > 0 || !monitor.didDrop()) return {};
    console.log('B');
    props.moveDiscFrom(props.tower);
    props.enableModal('loading');
    return {
      startTower: props.tower
    };
  },
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
});

const mdp = (dispatch) => ({
  activateGame: () => dispatch(activateGame()),
  removeModal: () => dispatch(removeModal()),
})

class Disc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      towerHeight: this.props.towerHeight,
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({loaded: true}), this.props.delay);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.towerHeight !== nextProps.towerHeight) {
      this.setState({ towerHeight: nextProps.towerHeight });
    };
  }
  
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <li className={ this.state.loaded ? "disc" : "disc hidden"} style={this.props.styling}></li>
    );
  }
}

export default DragSource('disc-and-tower', discSource, collect)(connect(null, mdp)(Disc));