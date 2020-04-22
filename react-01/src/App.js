import React from 'react';
import logo from './logo.svg';
import MyComponent from './components/MyComponent.js'
import EvenComponent from './components/EvenComponent.js'
import OddComponent from './components/OddComponent.js'
import './App.css';

// function App()

class App extends React.Component {
  constructor() {
    super();
    this.counter = 1;
    this.state = {
      myState: "TBD"
    };
  }
  onPushMe = () => {
    console.log("You pushed me.");
    this.counter = this.counter + 1;
    this.setState({
      myState: "now:" + this.counter
    });
  }
  render() {
    let oddComp;
    if (this.counter%2>0) {
      oddComp = <OddComponent counter={this.counter}/>
    }
    return (<div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <button onClick={this.onPushMe}>Push Me</button>
      <h1>{this.state.myState}</h1>
      <MyComponent whatToSay={"What Ever"} pushMe={this.onPushMe}/>
      <EvenComponent counter={this.counter}/>
      {oddComp}
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>)
  };
}

export default App;
