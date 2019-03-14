import React from 'react';

class Tower extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        loaded: false,
    }
    this.style = {
      background: '#666',
      height: '80%',
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({loaded: true}), this.props.delay);
  }

  render() {
    return (
      <ul id={`tower-${this.props.idx}`} className={this.state.loaded ? 'tower' : 'tower hidden'} style={{}}>
        <div className="disc"></div>
        <div className="disc"></div>
      </ul>
    )
  }
}

export default Tower;