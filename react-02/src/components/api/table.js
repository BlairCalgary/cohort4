const jsonToTable = require('json-to-table');
 
const myRecords = [
{
    name:'Bob',
    address:{zip:12345, state:'Euphoria'}
},
{
    name:'Jon',
    address:{street:'1234 Main St.', state:'Arizona'}
}];
function jsonTable (data) {
    const tabled = jsonToTable(data);
    return tabled
}

const tabled = jsonToTable(myRecords);

//tabled will be an array of arrays like this
//[
//['name', 'address.zip', 'address.state', 'address.street'],
//['Bob',  12345,         'Euphoria',      ''],
//['Jon',  '',            '1234 Main St.', 'Arizona']
//]

export default jsonTable;