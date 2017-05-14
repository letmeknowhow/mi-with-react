import React, { Component } from 'react';
import './App.css';
import TopBar from './components/TopBar'
import TopHeader from './components/TopHeader'
import TopBanner from './components/TopBanner'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <TopHeader />
        <TopBanner />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
