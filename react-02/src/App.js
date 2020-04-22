import React, { Component } from 'react';
import Icon from './components/Icon.js';
import Tictactoe from './components/tictactoe.js';
import Knotscross from './components/knotscross.js';
import './App.css';

import logo from './logo.svg';
import hamsaLogo from './hamsa.svg';
import lotusLogo from './lotus.svg';
import dharmaLogo from './dharma.svg';
import buddhaLogo from './buddha.svg';
import tictactoeLogo from './tictactoe.svg';

const iconsArr = [
  {
    key: 1,
    icon: logo,
    iconName: 'react'
  },
  {
    key: 2,
    icon: tictactoeLogo,
    iconName: 'tictactoe'
  },
  {
    key: 3,
    icon: hamsaLogo,
    iconName: 'hamsa'
  },
  {
    key: 4,
    icon: lotusLogo,
    iconName: 'lotus'
  },
  {
    key: 5,
    icon: dharmaLogo,
    iconName: 'dharma'
  },
  {
    key: 6,
    icon: buddhaLogo,
    iconName: 'buddha'
  },
]

class App extends Component {
  constructor() {
    super()
    this.state = {
      isActive: 'none',
      isActiveLogo: logo,
      activeComponent: <img src={logo}
        className="App-logo" alt="logo"
        />,
    }
  }
  activate = (symbol, symLogo) => {
    console.log(symbol);
    this.setState({
      isActive: symbol,
      isActiveLogo: symLogo
    })
  }


  // switch(expression) {
  //   case x:
  //     // code block
  //     break;
  //   case y:
  //     // code block
  //     break;
  //   default:
  //     // code block
  // }

  // activeApp() {
  //   // const appDisplay =
  //   var comp;
  //   switch (this.state.isActive) {
  //     case 'tictactoe':
  //       comp = <Tictactoe />;
  //       break;
  //     case 'hamsa':
  //       comp = <Knotscross />;
  //       break;
  //     default:
  //       comp = <img src={this.state.isActiveLogo}
  //         className="App-logo" alt="logo"
  //       />
  //       break;
  //   }
    
  //   this.setState({
  //     activeComponent: comp
      
  //   })
    
  //   // (this.state.isActive==='tictactoe' ?
  //   //   <Tictactoe /> :
  //   //   <img src={this.state.isActiveLogo}
  //   //     className="App-logo" alt="logo"
  //   //   />)
  //   // (this.state.isActive==='hamsa' ?
  //   //    :
  //   //   <img src={this.state.isActiveLogo}
  //   //     className="App-logo" alt="logo"
  //   //   />)
      
  //   // return appDisplay
  // }
  onClick = (e) => {
    const symLogo = e.target.getAttribute("icon")
    this.setState({isActiveLogo: symLogo})
    const todo = e.target.getAttribute("todo")
    // console.log('clicked: ', todo)
    // console.log('e.target: ', e.target)
    let comp;
    switch (todo) {
      case 'tictactoe':
        comp = <Tictactoe />;
        break;
      case 'hamsa':
        comp = <Knotscross />;
        break;
      default:
        comp = <img src={symLogo}
          className="App-logo" alt="logo"
        />
        break;
    }
    // console.log('set activeComponent:', todo)
    this.setState({
      activeComponent: comp,
      isActive: todo,
      
    })
  }

  render() {
    // const appDisplay = this.activeApp();
    return (
      <div className="App">
          <div onClick={this.onClick} className="Om-header">
            {iconsArr.map((icon, i) => (
              <Icon
                key={i}
                icon={iconsArr[i].icon}
                // icon={Object.values(iconsArr[i].icon)}
                // activateFromParent={this.activate}
                iconName={iconsArr[i].iconName}
                active={this.state.isActive}
              />
            ))}
          </div>
        <header className="App-header">
          {this.state.activeComponent}
          
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
      </div>
    );
  }
}

export default App;
