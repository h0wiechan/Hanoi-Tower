import React from 'react';

class Playground extends React.Component {
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
    return (
      <div id="playground" className={this.state.loaded ? '' : 'hidden'}>
      </div>
    );
  }
}

export default Playground;