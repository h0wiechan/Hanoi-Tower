import React from 'react';
import { DragSource } from 'react-dnd';

const discSource = {
  beginDrag: (props) => {
    console.log('DRAGGING')
    return {};
  },
  endDrag: (props, monitor, component) => {
    if (!monitor.didDrop()) return;
    console.log('DROPPED');
    return {};
  },
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
})
class Disc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({loaded: true}), this.props.delay);
  }
  
  render() {
    let { background, transform } = this.props.styling;
    const style = {
      background,
      transform: `${transform} translateY(9.5em)` 
    };
    const { connectDragSource, isDragging } = this.props;
    // 3: 9.5em
    // 8: .5em
    return connectDragSource(
      <li className={this.state.loaded ? "disc" : "disc hidden"} style={this.state.loaded ? style :this.props.styling}></li>
    );
  }
}

export default DragSource('disc-and-tower', discSource, collect)(Disc);