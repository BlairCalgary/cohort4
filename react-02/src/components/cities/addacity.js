import React from 'react'
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

        clone.name=document.querySelector(`[name="cityName"]`).value;
        clone.latitude=document.querySelector(`[name="cityLat"]`).value;
        clone.longitude=document.querySelector(`[name="cityLong"]`).value;
        clone.population=document.querySelector(`[name="cityPop"]`).value;

        var cityExists = false;
        for (let p = 0; p<cloneCities.length; p++) {
            if(cloneCities[p].name===clone.name) {
                cityExists = true;
            }
        }
        // console.log('does city exist?: ', cloneCities.find(el => el === clone.name))
        // console.log('city Search: ', clone.name);
        

        try {
            if(!clone.name) {
                const el = document.querySelector(`[name="cityName"]`);
                el.focus();
                el.select();
                window.alert('City name cannot be blank.');
                throw new Error('City Name cannot be blank.');
            }
            if(cityExists) {
                const el = document.querySelector(`[name="cityName"]`);
                el.focus();
                el.select();
                window.alert('City already exists.');
                throw new Error('City already exists.');
            }
            if(!clone.latitude) {clone.latitude="0"};
            if(!clone.longitude) {clone.longitude="0"};
            if(!clone.population) {clone.population="0"};
            this.props.addCity(clone);
            document.querySelector(`[name="cityName"]`).value='';
            document.querySelector(`[name="cityLat"]`).value='';
            document.querySelector(`[name="cityLong"]`).value='';
            document.querySelector(`[name="cityPop"]`).value='';
        } catch (e) {

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
        const rCity = await fetch(`https://restcountries.eu/rest/v2/capital/`+citySearch);
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
        this.setState({city: {name: event.target.value}})
    }
    latChange = (event) => {
        this.setState({city: {latitude: event.target.value}})
    }
    longChange = (event) => {
        this.setState({city: {longitude: event.target.value}})
    }
    popChange = (event) => {
        this.setState({city: {population: event.target.value}})
    }
    render() {
        return(
            <div id="addCityDiv" className="divBox">
                <form id="cityInput">
                    <strong>Add a city:</strong><br/>

                    <label>Name:</label>
                    <input name="cityName"></input><br/>

                    <label>Latitude:</label>
                    <input name="cityLat"></input><br/>

                    <label>Longitude:</label>
                    <input name="cityLong"></input><br/>

                    <label>Population:</label>
                    <input name="cityPop"></input><br/>

                    <button onClick={this.onSave} className="btn">Add Above City</button>
                    <button onClick={this.onRandom} className="btn">Random City</button>
                </form>
            </div>
        )
    }
}

export default AddACity