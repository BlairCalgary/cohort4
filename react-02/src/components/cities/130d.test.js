import {City} from './130d.js';
import {CityFetch} from './130d.js';
import {Controller} from './130d.js';
import {Capitals} from './130d.js';
// global.fetch = require('node-fetch')

const city = new City({
    key: "1",
    name: "Calgary",
    latitude: "51",
    longitude: "-114",
    population: "1000"});
const ba = new City({
    key: "2",
    name: "Buenos Aires",
    latitude: "-34",
    longitude: "-58",
    population: "2000"});
const cityFetch = new CityFetch;
const controller = new Controller;
const capitals = new Capitals;

test('create city in controller', () => {
    controller.createCity(city);
    expect(controller.cities[0].name).toBe('Calgary');
    controller.createCity(ba);
    expect(controller.cities[1].name).toBe('Buenos Aires');
});

// controller.createCity(city);
// controller.createCity(ba);
// console.log(controller.cities);


test('Testing constructor', async () =>{
    const newCity = new City({
        key: "1",
        name: "Red Deer",
        latitude: "52",
        longitude: "-114",
        population: "3000"});    
    expect(newCity.name).toBe('Red Deer');
    expect(newCity.latitude).toBe('52');
    expect(newCity.longitude).toBe('-114');
    expect(newCity.population).toBe('3000');
});

test('show method returns single string', async () =>{
    const newCity = new City({
        key: "1",
        name: "Red Deer",
        latitude: "52",
        longitude: "-114",
        population: "3000"});  
    expect(newCity.show()).toBe('Red Deer52-1143000');
});

test('movedIn adds a number to the population', async () =>{
    const newCity = new City({
        key: "1",
        name: "Red Deer",
        latitude: "52",
        longitude: "-114",
        population: "3000"});  
    expect(newCity.movedIn(10)).toBe('3010');
});

test('movedOut subtracts a number from the population', async () =>{
    const newCity = new City({
        key: "1",
        name: "Red Deer",
        latitude: "52",
        longitude: "-114",
        population: "3000"});
    expect(newCity.movedOut(1000)).toBe('2000');
});

test('return settlement class', async () => {
    const newCity = new City({
        key: "1",
        name: "Red Deer",
        latitude: "52",
        longitude: "-114",
        population: "200000"});
    expect(newCity.howBig()).toBe('City');
    newCity.population = 50000;
    expect(newCity.howBig()).toBe('Large town');
    newCity.population = 2000;
    expect(newCity.howBig()).toBe('Town');
    newCity.population = 200;
    expect(newCity.howBig()).toBe('Village');
    newCity.population = 50;
    expect(newCity.howBig()).toBe('Hamlet');
});

test('N or W hemisphere', async () => {
    expect(city.whichSphere()).toBe('N');
    expect(ba.whichSphere()).toBe('S');
});

test('get most northern', () => {
    expect(controller.getMostNorthern()).toBe('Calgary');
});

test('get most southern', () => {
    expect(controller.getMostSouthern()).toBe('Buenos Aires');
});

test('get total population', () => {
    // console.log(controller.getPopulation());
    city.population = 1000;
    ba.population = 2000;
    const newCity = new City({
        key: "1",
        name: "Red Deer",
        latitude: "52",
        longitude: "-114",
        population: "3000"});
    controller.createCity(newCity);
    expect(controller.getPopulation()).toBe(6000);
});

test('test delete city', () => {
    const cont = new Controller();
    cont.createCity(new City({
        key: "1",
        name: "Red Deer",
        latitude: "51",
        longitude: "-114",
        population: "1000"}));
    cont.createCity(new City({
        key: "2",
        name: "Edmonton",
        latitude: "51",
        longitude: "-114",
        population: "2000"}));
    expect(cont.cities[0].name).toBe('Red Deer');
    cont.deleteCity(1);
    expect(cont.cities[0].name).toBe('Edmonton');
});

// reload 3 records from file
test('reload data', async () => {
    const loadResp = await cityFetch.load();
    expect(loadResp).toBe('<h1>EvolveU test</h1> <h2>7 records Loaded</h2>');
});
// add 'red deer' (should be 8 records)
test('call postData work?', async () => {
    // const url = 'http://127.0.0.1:5000/add';
    const resp1 = await cityFetch.all();
    const lengthBefore = resp1.length;
    const data = {
        "key": "8",
        "name": "Red Deer",
        "latitude": "52.28",
        "longitude": "-113.81",
        "population": "103588"
    };
    cityFetch.add(data);
    const resp2 = await cityFetch.all();
    expect(resp2.length-lengthBefore).toBe(1);
});

// read key 7 'warsaw'
test('read a response', async () => {
    const data = {
        "key": "9",
        "name": "Sudbury",
        "latitude": "46",
        "longitude": "-87",
        "population": "50000"
    };
    cityFetch.add(data);
    const key = 9;
    const resp = await cityFetch.read(key);
    // console.log(resp[0].name);
    expect(resp[0].name).toBe('Sudbury');
});

// read all (3 records)
test('return all data', async () => {
    await cityFetch.load();
    const resp = await cityFetch.all();
    expect(resp.length).toBe(7);
    // expect(resp[0].name).toBe('Warsaw');
});

// delete key 7 (warsaw), 7 records to remain
test('delete object', async () => {
    await cityFetch.load();
    const key = 7;
    await cityFetch.delete(key);
    // expect(resp.length).toBe(8);
    // expect(resp[0].name).toBe('Warsaw');
    const resp = await cityFetch.all();
    expect(resp.length).toBe(6);
});

// update calgary population
test('update object', async () => {
    await cityFetch.load();
    const key = 1;
    const resp = await cityFetch.read(key);
    // console.log(`First read fetch: `, resp[0].population);
    expect(resp[0].population).toBe('1285711');
    const data = {
        "key": "1",
        "name": "Calgary",
        "latitude": "51",
        "longitude": "-114",
        "population": "4000"
    };
    await cityFetch.update(data);
    const respNew = await cityFetch.read(key);
    // console.log(`Second read fetch: `, respNew[0].population);
    expect(respNew[0].population).toBe('4000');
    const data2 = {
        "key": "1",
        "name": "Calgary",
        "latitude": "51",
        "longitude": "-114",
        "population": "1285711"
    };
    await cityFetch.update(data2);
});

// save file
test('save data', async () => {
    const resp = await cityFetch.save();
    // console.log('response:', resp);
    expect(resp).toBe('<h1>EvolveU test</h1> <h2>7 records Saved</h2>');
});
// clear data file
test('clear data', async () => {
    const resp = await cityFetch.clear();
    // console.log('response:', resp);
    expect(resp).toStrictEqual({});
});

// Test capitals class
test('test capitals class', async () => {
    const data = {
        "key": "1",
        "name": "Calgary",
        "latitude": "51",
        "longitude": "-114",
        "population": "4000"
    };
    capitals.addCapital(data);
    expect(capitals.capitals[0].name).toBe('Calgary');
});