import React from 'react'
import { ThemeContext } from '../theme/ThemeContext';
// import {Capitals} from './130d.js';



class AddACity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            capitals: [],
        }
    }
    onSave = (e) => {
        e.preventDefault();
        const clone = {};
        const cloneCities = [...this.props.cities];
        // console.log(cloneCities);

        clone.name = document.querySelector(`[name="cityName"]`).value;
        clone.latitude = document.querySelector(`[name="cityLat"]`).value;
        clone.longitude = document.querySelector(`[name="cityLong"]`).value;
        clone.population = document.querySelector(`[name="cityPop"]`).value;

        let allConditionsMet = true;
        let errorMsg;
        
        for (let p = 0; p < cloneCities.length; p++) {
            if (cloneCities[p].name === clone.name) {
                allConditionsMet = false;
                errorMsg = 'City already exists.';
                break;
            }
        }
        if (allConditionsMet && Math.abs(Number(document.querySelector(`[name="cityLat"]`).value)) > 90) {
            allConditionsMet = false;
            errorMsg = 'Latitude must be between -90 and 90 (inclusive).';
        }
        if (allConditionsMet && Math.abs(Number(document.querySelector(`[name="cityLong"]`).value)) > 180) {
            allConditionsMet = false;
            errorMsg = 'Longitude must be between 180 and -180 (inclusive).';
        }
        if (allConditionsMet && !clone.name) {
            allConditionsMet = false;
            errorMsg = 'City name cannot be blank.';
        }

        // console.log('does city exist?: ', cloneCities.find(el => el === clone.name))
        // console.log('city Search: ', clone.name);


        if (allConditionsMet) {
            if (!clone.population) { clone.population = "0" };
            this.props.addCity(clone);
        } else {
            alert(errorMsg);
        }

    }
    async componentDidMount() {
        // const capitals = new Capitals();
        const capitalsClone = [...this.state.capitals];
        const caps = await fetch(`https://restcountries.eu/rest/v2/regionalbloc/eu`);
        const resp = await caps.json();
        for (const city in resp) {
            capitalsClone.push(resp[city].capital)
            // capitals.addCapital(resp[city].capital);
        }
        this.setState({
            capitals: capitalsClone
        })
    }
    onRandom = async (e) => {
        e.preventDefault();
        // console.log('onRandom module: ', this.state.capitals);
        const rando = Math.floor(Math.random() * this.state.capitals.length)
        // fetchCapital(this.state.capitals[rando]);
        const citySearch = this.state.capitals[rando]
        const rCity = await fetch(`https://restcountries.eu/rest/v2/capital/` + citySearch);
        const resp = await rCity.json();

        const cityEl = document.querySelector(`[name="cityName"]`);
        cityEl.value = resp[0].capital;

        const cityLat = document.querySelector(`[name="cityLat"]`);
        cityLat.value = resp[0].latlng[0];

        const cityLong = document.querySelector(`[name="cityLong"]`);
        cityLong.value = resp[0].latlng[1];

        const cityPop = document.querySelector(`[name="cityPop"]`);
        cityPop.value = resp[0].population;
        // el.select();

        // console.log(resp[0].capital);
        // this.setState({
        //     city: {
        //         name: resp[0].capital,
        //         latitude:resp[0].latlng[0],
        //         longitude:resp[0].latlng[1],
        //         population:resp[0].population,
        //     }
        // });

    }
    nameChange = (event) => {
        this.setState({ city: { name: event.target.value } })
    }
    latChange = (event) => {
        this.setState({ city: { latitude: event.target.value } })
    }
    longChange = (event) => {
        this.setState({ city: { longitude: event.target.value } })
    }
    popChange = (event) => {
        this.setState({ city: { population: event.target.value } })
    }
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;
                return (
                    <div id="addCityDiv" className="divBox" style={{ background: theme.bg }}>
                        <form id="cityInput">
                            <strong>Add a city:</strong><br />

                            <label>Name:</label>
                            <input name="cityName"></input><br />

                            <label>Latitude:</label>
                            <input name="cityLat"></input><br />

                            <label>Longitude:</label>
                            <input name="cityLong"></input><br />

                            <label>Population:</label>
                            <input name="cityPop"></input><br />

                            <button onClick={this.onSave} className="btn">Add Above City</button>
                            <button onClick={this.onRandom} className="btn">Random City</button>
                        </form>
                    </div>
                )
            }}
            </ThemeContext.Consumer>

        )
    }
}

export default AddACity