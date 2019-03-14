import React from 'react';
import { createArrayOfLength } from '../util/general_util';
class Tower extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        loaded: false,
    }
    this.colors = {
      0: '#E02936', // red
      1: '#D6752D', // orange
      2: '#BAB341', // yellow
      3: '#189A79', // green
      4: '#107392', // blue
      5: '#493362', // purple
      6: '#6A5279', // light purple
      7: '#5C6D98', // greyish blue
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({loaded: true}), this.props.delay);
  }

  generateDiscs() {
    return (
      createArrayOfLength(this.props.noOfDiscs).map((i) => {
        const style = {
          background: this.colors[i],
          transform: `scaleX(${2.0 + 1 * i})`,
        }
        return <li key={i} className="disc" style={style}></li>
      })
    )
  }

  render() {
    return (
      <ul id={`tower-${this.props.idx}`} className={this.state.loaded ? 'tower' : 'tower hidden'} style={{}}>
        {this.generateDiscs()}
      </ul>
    )
  }
}

export default Tower;