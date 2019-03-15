import React from 'react';
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


class Disc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      towerHeight: this.props.towerHeight,
    }
    this.yDiffs = {
      1: '13.0em', 
      2: '11.0em', 
      3: '9.5em', 
      4: '7.5em',
      5: '5.8em',
      6: '4.0em',
      7: '2.0em',
      8: '.4em'
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({loaded: true}), this.props.delay);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.towerHeight !== nextProps.towerHeight) this.setState({ towerHeight: nextProps.towerHeight });
  }
  
  render() {
    let { background, transform } = this.props.styling;
    const style = {
      background,
      transform: `${transform} translateY(${this.yDiffs[this.state.towerHeight]})` 
    };
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <li className={this.state.loaded ? "disc" : "disc hidden"} style={this.state.loaded ? style :this.props.styling}></li>
    );
  }
}

export default DragSource('disc-and-tower', discSource, collect)(Disc);