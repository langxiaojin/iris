import React, { Component } from 'react';
import logo from './logo.svg';
import './App.less';
import Scatter from './containers/Scatter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Iris Data View By React And D3</h1>
        </header>
        <Scatter></Scatter>
      </div>
    );
  }
}

export default App;
