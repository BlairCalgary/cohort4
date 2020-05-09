import React from 'react'
import AddACity from './addacity.js'
import TotalPop from './totalpop.js'
import MostNorth from './mostnorth.js'
import MostSouth from './mostsouth.js'
import Cards from './cards.js'

import {City} from './130d.js';
import {CityFetch} from './130d.js';
import {Controller} from './130d.js';
import {Capitals} from './130d.js';

const cityFetch = new CityFetch();
const controller = new Controller();
const capitals = new Capitals();

// async function loadServerData() {
//     const resp = await cityFetch.all();
//     for (const obj in resp) {
//         controller.createCity(new City(resp[obj]));
//     }
// };
// loadServerData();

class Cities extends React.Component {
    constructor() {
        super();
        this.state = {
            cities: [],
        }
    }
    componentDidMount = async () => {
        const citiesClone = [...this.state.cities];
        const resp = await cityFetch.all();
        for (const obj in resp) {
            citiesClone.push(new City(resp[obj]))
            // cities.createCity(new City(resp[obj]));
        }
        this.setState({ cities: citiesClone });
    }
    render() {
        return (
            <div className="divBorder">
                <div id="container">
                    <div id="leftPanel">
                        <AddACity />
                    </div>
                    <div id="leftPanel">
                        <TotalPop cities={this.state.cities}/>
                        <MostNorth cities={this.state.cities}/>
                        <MostSouth cities={this.state.cities}/>
                    </div>
                </div>
                <div>
                    <Cards cities={this.state.cities}/>
                </div>
            </div>  
        )
    }
}

export default Cities