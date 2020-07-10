import React from 'react'
import AddACity from './addacity.js'
import TotalPop from './totalpop.js'
import MostNorth from './mostnorth.js'
import MostSouth from './mostsouth.js'
import Cards from './cards.js'
import About from './about.js'
import { ThemeContext } from '../theme/ThemeContext';

import { City } from './130d.js';
import { CityFetch } from './130d.js';
// import {Controller} from './130d.js';

const cityFetch = new CityFetch();
// const controller = new Controller();




class Cities extends React.Component {
    constructor() {
        super();
        this.state = {
            cities: [],
            serverStatus: [],
        }
    }
    componentDidMount = async () => {
        try {
            const citiesClone = [...this.state.cities];
            await cityFetch.load();
            const resp = await cityFetch.all();
            for (const obj in resp) {
                citiesClone.push(new City(resp[obj]))
                // cities.createCity(new City(resp[obj]));
            }
            this.setState({ cities: citiesClone });
        } catch {
            this.setState({serverStatus: [<p>Could not connect to server.</p>]})
        }
        
    }
    deleteIt = (props) => {
        const City = props;
        const confirmDelete = window.confirm("Delete " + City + "?");

        const citiesClone = [...this.state.cities];

        if (confirmDelete) {
            for (const keyCount in citiesClone) {
                if (citiesClone[keyCount].name === City) {
                    const displayKey = citiesClone[keyCount].key;
                    cityFetch.delete(displayKey);

                    citiesClone.splice(keyCount, 1);
                    this.setState({
                        cities: citiesClone,
                    })
                    // controller.deleteCity(displayKey);


                }
            }

            // clearDisplay();

            // updatePage();

        }

        // console.log('in delete: ', props)
    }

    moveIn = async (city, migration) => {
        const citiesClone = [...this.state.cities];
        for (const keyCount in citiesClone) {
            if (citiesClone[keyCount].name === city) {
                const cityObj = JSON.parse(JSON.stringify(citiesClone[keyCount]));
                cityObj.population = String(Number(cityObj.population) + Number(migration))
                // cityObj.population+=migration;
                await cityFetch.update(cityObj);

                citiesClone[keyCount] = cityObj;
                this.setState({ cities: citiesClone })

                // console.log(cityObj);
                break;
            }
        }
        // console.log('in moveInParent: ', city, migration);
    }
    moveOut = async (city, migration) => {
        const citiesClone = [...this.state.cities];
        for (const keyCount in citiesClone) {
            if (citiesClone[keyCount].name === city) {
                const cityObj = JSON.parse(JSON.stringify(citiesClone[keyCount]));
                cityObj.population = String(Number(cityObj.population) - Number(migration))
                // cityObj.population+=migration;
                await cityFetch.update(cityObj);
                citiesClone[keyCount] = cityObj;
                this.setState({ cities: citiesClone })
                // console.log(cityObj);
                break;
            }
        }
        // console.log('in moveOutParent: ', city, migration);
    }

    addCity = async (props) => {
        // console.log('addCity props ', props);
        const cloneProps = { ...props };
        const citiesClone = [...this.state.cities];

        const keys = [];
        for (const keyCount in citiesClone) {
            keys.push(citiesClone[keyCount].key);
        }
        let i = 0;
        do {
            i++;
        }
        while (keys.indexOf(String(i)) >= 0);
        const newKey = String(i);
        cloneProps.key = newKey;
        await cityFetch.add(cloneProps);
        citiesClone.push(new City(cloneProps));
        this.setState({ cities: citiesClone });

        // console.log(props.name);
    }
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;


                return (
                    <div>
                        <div className="divBorder">
                            <div id="container" style={{ background: theme.ui }}>
                                <div id="leftPanel">
                                    <AddACity addCity={this.addCity} cities={this.state.cities} />
                                </div>
                                <div id="leftPanel">
                                    <TotalPop cities={this.state.cities} />
                                    <MostNorth cities={this.state.cities} />
                                    <MostSouth cities={this.state.cities} />
                                </div>
                            </div>
                            <div style={{ background: theme.ui }}>
                                <Cards
                                    cities={this.state.cities}
                                    deleteIt={this.deleteIt}
                                    moveInParent={this.moveIn}
                                    moveOutParent={this.moveOut}
                                />
                            </div>
                        </div>
                        <div>
                            {this.state.serverStatus}
                            <About />
                        </div>
                    </div>
                )
            }}
            </ThemeContext.Consumer>
        )
    }
}

export default Cities