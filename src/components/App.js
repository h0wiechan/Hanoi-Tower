import React from 'react';
import Header from './header';
import Game from './game';
import '../assets/stylesheets/reset.css';
import '../assets/stylesheets/index.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header delay={500}/>
        <Game delay={1000}/>
      </div>
    );
  }
}

export default App;
