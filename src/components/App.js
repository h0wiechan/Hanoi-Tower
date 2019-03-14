import React from 'react';
import Header from './header';
import '../assets/stylesheets/reset.css';
import '../assets/stylesheets/index.css';

class App extends React.Component {
  render() {
    const logo = require('../assets/images/ToT.svg');
    return (
      <div className="app">
        <Header delay={500}/>
      </div>
    );
  }
}

export default App;
