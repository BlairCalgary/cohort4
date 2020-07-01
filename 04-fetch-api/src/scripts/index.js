import {City} from './130d.js';
import {CityFetch} from './130d.js';
import {Controller} from './130d.js';
import {Capitals} from './130d.js';
// import functions from './main.js';

const cityFetch = new CityFetch;
const controller = new Controller;
const capitals = new Capitals;

// Load server data to use this session
async function loadServerData() {
    try {
        const resp = await cityFetch.all();
        for (const obj in resp) {
            controller.createCity(new City(resp[obj]));
        }
    } catch(err) {
        console.log("Did not load server data:",err)
    }
};
loadServerData();

function addAcctCard(obj) {
    let acctparent = document.getElementById('rightPanel');

    let childNode = document.createElement("div");
    childNode.className = 'divBox Card';

    let childNode2 = document.createElement("div");
    childNode2.className = 'leftCityCard';
    
    let spanNode = document.createElement("strong");
    spanNode.textContent = obj.name;
    childNode2.appendChild(spanNode);

    let buttonNode = document.createElement("button");
    buttonNode.className = 'trash';
    // buttonNode.textContent = 'Show';
    childNode2.appendChild(buttonNode);

    childNode.appendChild(childNode2);

    let middleDiv = document.createElement("div");

    let settlementEl = document.createTextNode("Settlement: " + obj.howBig())
    middleDiv.appendChild(settlementEl)
    let settlementBreak = document.createElement("br");
    middleDiv.appendChild(settlementBreak)

    let latElement = document.createTextNode("Latitude: " + obj.latitude)
    middleDiv.appendChild(latElement);
    let latBreak = document.createElement("br");
    middleDiv.appendChild(latBreak);
    let longElement = document.createTextNode("Longitude: " + obj.longitude)
    middleDiv.appendChild(longElement)
    let breakElement2 = document.createElement("br");
    middleDiv.appendChild(breakElement2)
    let popElement = document.createTextNode("Population: " + obj.population)
    middleDiv.appendChild(popElement)
    let breakElement3 = document.createElement("br");
    middleDiv.appendChild(breakElement3)
    

    childNode.appendChild(middleDiv)

    let childNode3 = document.createElement("div");
    childNode3.className = 'rightCityCard';

    let textNode = document.createTextNode("Migration:")
    childNode3.appendChild(textNode)

    let input = document.createElement('input');
    input.setAttribute('id','moveInOut'+obj.key);
    input.setAttribute('type','number');
    input.className = 'moveInOut';
    childNode3.appendChild(input);

    let buttonNode2 = document.createElement('button');
    buttonNode2.className = 'smallbtn';
    buttonNode2.textContent = '+';
    childNode3.appendChild(buttonNode2);
    
    let buttonNode3 = document.createElement('button');
    buttonNode3.className = 'smallbtn';
    buttonNode3.textContent = '-';
    childNode3.appendChild(buttonNode3);

    childNode.appendChild(childNode3);

    acctparent.append(childNode);
};

function updatePage() {
    let parent = document.getElementById('rightPanel');
    let child;
    while (parent.childElementCount>0) {
        child=parent.lastElementChild;
        parent.removeChild(child);
    }
    let x;
    for (x = 0; x < controller.cities.length; x++) {
        addAcctCard(controller.cities[x]);
    }
    totalPopOutput.textContent = controller.getPopulation();
    mostNorthOutput.textContent = controller.getMostNorthern();
    mostSouthOutput.textContent = controller.getMostSouthern();

}

function newKey() {
    const keys = [];
    for (const keyCount in controller.cities) {
        keys.push(controller.cities[keyCount].key);
    }
    let i = 0;
    do {
        i++;
    }
    while (keys.indexOf(String(i))>=0);
    return String(i);
}

async function addCity() {
    (cityName.value==="" ? cityName.classList.add('userInput') :'');
    (lat.value==="" ? lat.classList.add('userInput') :'');
    (long.value==="" ? long.classList.add('userInput') :'');
    (pop.value==="" ? pop.classList.add('userInput') :'');
    if (cityName.value==="" ||
        lat.value==="" ||
        long.value==="" ||
        pop.value==="") {
            console.log("Values need to be non-zero.")

        } else {
        const cityObj = {};
        cityObj.key = newKey();
        
        cityObj.name = cityName.value;
        cityObj.latitude = lat.value;
        cityObj.longitude = long.value;
        cityObj.population = pop.value;
        const resp = await cityFetch.add(cityObj);
    
        if (resp.status===200) {
            controller.createCity(new City(cityObj));
        };
        updatePage();
        cityName.value = "";
        lat.value = "";
        long.value = "";
        pop.value = "";
        clearDisplay();
        
    }
}

// Initialize server on load.
async function init() {
    try {
        await cityFetch.load();
        await updatePage();
    } catch (err) {
        console.log("Did not load server data:", err);
    }
    
};
init();

async function fetchCapital(city){
    const rCity = await fetch(`https://restcountries.eu/rest/v2/capital/`+city);
    const resp = await rCity.json();
    cityName.value = resp[0].capital;
    lat.value = resp[0].latlng[0];
    long.value = resp[0].latlng[1];
    pop.value = resp[0].population;
    clearDisplay();
}

function moveOutCity(num, city) {
    if (num!="") {
        for (const keyCount in controller.cities) {
            if (controller.cities[keyCount].name===city) {
                controller.cities[keyCount].movedOut(num);
                cityFetch.update(controller.cities[keyCount]);
                updatePage();
            }
        }
        
    } else {
        console.log("input must be non-zero.");
    }
}

function moveInCity(num, city) {
    if (num!="") {
        for (const keyCount in controller.cities) {
            if (controller.cities[keyCount].name===city) {
                controller.cities[keyCount].movedIn(num);
                cityFetch.update(controller.cities[keyCount]);
                updatePage();
            }
        }

    } else {
        console.log("input must be non-zero.");
    }
}

rightPanel.addEventListener('click', ((e) => {
    switch(e.target.textContent) {
        case '-':
            const varMoveOut = e.target.previousSibling.previousSibling.value;
            const varCity = e.target.parentNode.parentNode.childNodes[0].childNodes[0].textContent;
            moveOutCity(varMoveOut, varCity);
            clearDisplay();
            break;
        case '+':
            const varMoveIn = e.target.previousSibling.value;
            const varCityIn = e.target.parentNode.parentNode.childNodes[0].childNodes[0].textContent;
            moveInCity(varMoveIn, varCityIn);
            clearDisplay();
            break;
    }
    if (e.target.className==='trash') {
        let targetCity = e.target.parentNode.childNodes[0].textContent
        confirmDelete(targetCity);
    }
}));

function confirmDelete(City) {
    const confirmDelete = confirm("Delete " + City +"?");
    if (confirmDelete) {
        for (const keyCount in controller.cities) {
            if (controller.cities[keyCount].name===City) {
                const displayKey = controller.cities[keyCount].key;
                cityFetch.delete(displayKey);
                controller.deleteCity(displayKey);
            } 
        }
        
        clearDisplay();

        updatePage();
        
    }
}

function clearDisplay() {
    cityName.classList.remove('userInput');
    lat.classList.remove('userInput');
    long.classList.remove('userInput');
    pop.classList.remove('userInput');
};
cityName.addEventListener('change', (() => {
    cityName.classList.remove('userInput');
}));
lat.addEventListener('change', (() => {
    lat.classList.remove('userInput');
}));
long.addEventListener('change', (() => {
    long.classList.remove('userInput');
}));
pop.addEventListener('change', (() => {
    pop.classList.remove('userInput');
}));

randomCity.addEventListener('click', (() => {
    const rando = Math.floor(Math.random() * capitals.capitals.length)
    fetchCapital(capitals.capitals[rando]);
}));

document.addEventListener('DOMContentLoaded', async () => {
    const caps = await fetch(`https://restcountries.eu/rest/v2/regionalbloc/eu`);
    const resp = await caps.json();

    for (const city in resp) {
        capitals.addCapital(resp[city].capital);
    }
});

cityAdd.addEventListener('click', (() => {
    addCity();
}));
