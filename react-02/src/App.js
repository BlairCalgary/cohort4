import React, { Component } from 'react';
import Icon from './components/Icon.js';
import Tictactoe from './components/tictactoe/tictactoe.js';
import Accounts from './components/accounts/accounts.js';
import Cities from './components/cities/cities.js';
import { Queue } from './components/queue/queue.js';
import { LinkedListComp } from './components/linkedlist/linkedlist.js';

import './App.css';
import './components/accounts/account.css';
import './components/cities/fetch.css';

import logo from './logo.svg';
import cityLogo from './city.svg';
import stackLogo from './stack.svg';
import linkedListLogo from './linkedlist.svg';
import tictactoeLogo from './tictactoe.svg';
import bankLogo from './bank.svg';
import settingsLogo from './settings.svg';

// import { themes, ThemeContext } from './components/theme/theme-context.js';

import ThemeContextProvider from './components/theme/ThemeContext.js';
import ThemeTogglerButton from './components/theme/theme-toggler-button.js';
import Theme from './components/theme/theme.js'

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
    icon: bankLogo,
    iconName: 'bank'
  },
  {
    key: 4,
    icon: cityLogo,
    iconName: 'city'
  },
  {
    key: 5,
    icon: linkedListLogo,
    iconName: 'linkedList'
  },
  {
    key: 6,
    icon: stackLogo,
    iconName: 'stack'
  },
  {
    key: 7,
    icon: settingsLogo,
    iconName: 'settings'
  },
]

class App extends Component {
  constructor(props) {
    super(props);
    
    // this.toggleTheme = () => {
    //   console.log('in toggletheme')
      
    //   this.setState(state => ({
    //     theme:
    //       (state.theme === themes.dark
    //         ? themes.light
    //         : themes.dark),
    //   }));
    // }
    
    this.state = {
      // theme: themes.light,
      toggleTheme: this.toggleTheme,
      isActive: 'none',
      isActiveLogo: logo,
      activeComponent: <img src={logo}
        className="App-logo" alt="logo"
        />,
    };
    
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
      case 'linkedList':
        comp = <LinkedListComp />;
        break;
      case 'stack':
        comp = <Queue />;
        break;
      case 'settings':
        comp = <Theme />;
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
        <ThemeContextProvider>
          {this.state.activeComponent}
        </ThemeContextProvider>

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

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

export default App;
