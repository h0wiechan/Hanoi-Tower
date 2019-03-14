import React from 'react';

class Header extends React.Component {
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
    const logo = require('../assets/images/ToT.svg');
    return (
      <header id="app-header" className={this.state.loaded ? '' : 'hidden'}>
        <img src={logo}></img>
        <h1>Tower of Hanoi</h1>
      </header>
    );
  }
}

export default Header;
