import React, { Component } from 'react';
import Icon from './components/Icon.js';
import Tictactoe from './components/tictactoe/tictactoe.js';
import Accounts from './components/accounts/accounts.js';
import Cities from './components/cities/cities.js';

import './App.css';
import './components/accounts/account.css';
import './components/cities/fetch.css';

import logo from './logo.svg';
import cityLogo from './city.svg';
import dharmaLogo from './dharma.svg';
import buddhaLogo from './buddha.svg';
import tictactoeLogo from './tictactoe.svg';
import bank from './bank.svg';

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
    icon: bank,
    iconName: 'bank'
  },
  {
    key: 4,
    icon: cityLogo,
    iconName: 'city'
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
      case 'bank':
        comp = <Accounts />;
        break;
      case 'city':
        comp = <Cities />;
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
