import React from 'react';
import Header from './header';
import Panel from './panel/panel';
import Game from './game';
import '../assets/stylesheets/reset.css';
import '../assets/stylesheets/index.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header delay={500}/>
        <Panel delay={1000}/>
        <Game delay={1500}/>
      </div>
    );
  }
}

export default App;
