// Get capitals from external API
export class Capitals {
    constructor() {
        this.capitals = [];
    }
    addCapital(cap) {
        this.capitals.push(cap);
    }
}

// City class (app)
export class City {
    constructor({name, latitude, longitude, population, key}) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
        this.key = key
    }
    show() {
        return this.name +
            this.latitude +
            this.longitude +
            this.population
    }
    movedIn(moveIn) {
        this.population=String(Number(this.population)+Number(moveIn));
        return this.population;
    }
    movedOut(moveOut) {
        this.population=String(Number(this.population)-Number(moveOut));
        return this.population;
    }
    howBig() {
        // return 'City';
        switch (true) {
            case this.population > 100000:
                return 'City';
                // break;
            case this.population > 20000:
                return 'Large town';
                // break;
            case this.population > 1000:
                return 'Town';
                // break;
            case this.population > 100:
                return 'Village';
                // break;
            default:
                return 'Hamlet';
        }
    }
    whichSphere() {
        if (this.latitude > 0) {
            return 'N';
        } else {
            return 'S';
        }
    }
}

export class Controller {
    constructor() {
        this.cities = [];
    }
    createCity(obj) {
        this.cities.push(obj);
    }
    deleteCity(key) {
        for (const keyCount in this.cities) {
            if (this.cities[keyCount].key===String(key)) {
                this.cities.splice(keyCount,1);
            }
            
        }
    }
    getMostNorthern() {
        let most = 0;
        for (const lat in this.cities) {
            ((lat===0)?most=lat:null);
            (this.cities[lat].latitude>this.cities[most].latitude?most=lat:null)
        }
        return this.cities[most].name;
    }
    getMostSouthern() {
        let most = 0;
        for (const lat in this.cities) {
            ((lat===0)?most=lat:null);
            (Number(this.cities[lat].latitude)<Number(this.cities[most].latitude)?most=lat:null)
        }
        return this.cities[most].name;
        
    }
    getPopulation() {
        const pop = [];
        for (const popCount in this.cities) {
            pop.push(Number(this.cities[popCount].population));
        }
        return pop.reduce((a, b) => a + b, 0);
    }
}

// City class (API)
export class CityFetch {
    constructor() {
        this.cities = [];
        this.header = {
            mode: 'cors',       // no-cors, *cors, same-origin
            cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow',         // manual, *follow, error
            referrer: 'no-referrer',    // no-referrer, *client
        }
    }
    async add(data) {
        // Default options are marked with *
        const url = `http://127.0.0.1:5000/add`;
        const header = this.header;
        header.method = 'POST';
        header.body = JSON.stringify(data);
        // console.log(header);
        const response = await fetch(url, header);

        // console.log('Add Route status: ', response.status);
        if (response.status > 199 && response.status < 300) {
            console.log('Add Route: Success')
        } else {
            console.log('Add Route: Fail')
        }

        return await response;   // parses body text as JSON
    
    }
    async read(key) {
        const keyJson = {
            "key": `${key}`
        }
        const url = `http://127.0.0.1:5000/read`;
        const header = this.header;
        header.method = 'POST';
        header.body = JSON.stringify(keyJson);
        const response = await fetch(url, header);
        return await response.json();   // parses body text as JSON
        // const resp = await response.json();
        // console.log(keyJson);
        // console.log(resp);
    }
    async all() {
        const url = `http://127.0.0.1:5000/all`;
        const header = this.header;
        header.method = 'POST';
        const response = await fetch(url, header);
        return await response.json();           
    }
    async delete(key) {
        const keyJson = {
            "key": `${key}`
        }
        const url = `http://127.0.0.1:5000/delete`;
        const header = this.header;
        header.method = 'POST';
        header.body = JSON.stringify(keyJson);
        await fetch(url, header);
        
    }
    async load() {
        const url = `http://127.0.0.1:5000/load`;
        const response = await fetch(url);
        return await response.text();
    
    }
    async update(data) {
        const url = `http://127.0.0.1:5000/update`;
        const header = this.header;
        header.method = 'POST';
        header.body = JSON.stringify(data);
        await fetch(url, header);
    }
    async save() {
        const url = `http://127.0.0.1:5000/save`;
        const response = await fetch(url);
        return await response.text();
    }
    async clear() {
        const url = `http://127.0.0.1:5000/clear`;
        const response = await fetch(url);
        return await response.json();   // parses body text as JSON
    }

}

