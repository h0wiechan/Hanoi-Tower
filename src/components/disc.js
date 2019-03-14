import React from 'react';

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
    // 3: 9.5em
    // 8: .5em
    return (
      <li className={this.state.loaded ? "disc" : "disc hidden"} style={this.state.loaded ? style :this.props.styling}></li>
    );
  }
}

export default Disc;