import React from 'react';
import Tower from './tower';
class Game extends React.Component {
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
        {
          [0, 1, 2].map((n) => (
            <Tower idx={n} delay={this.props.delay + 500}/>
          ))
        }
      </div>
    );
  }
}

export default Game;