const syntax = {
    // number
    addTwo: (x) => {
        return x+2;
    },

    // string
    addHone: (x) => {
        return x + 'Hone';
    },

    // boolean
    isNameBlair: (x) => {
        return (x==='Blair');
    },

    isBoolean: (x) => {
        return (typeof(x)==='boolean');
    },

    // array
    isArray: (x) => {
        return (Array.isArray(x));
    },
    // dictionary / objects
    isObject: (x) => {
        return (x.constructor.name==='Object');
    },
    // undefined
    isUndefined: (x) => {
        return (typeof(x)==='undefined') ? true : false;
    },
    // sample if / else
    isEven: (x) => {
        if (x%2===0) {
            return true;
        } else {
            return false;
        }
    },
    // add to the front (add '0' to front of array)
    addToFront: (x) => {
        x.unshift(0);
        return x;
    },
    // add to the end (add '9' to end of array)
    addToEnd: (x) => {
        x.push(9);
        return x;
    },
    // update values
    updateValue: (x) => {
        var x = 'blair';
        return x;
    },
    // for
    forLoop: (x) => {
        for (let step = 0; step < x.length; step++) {
            // Runs 5 times, with values of step 0 through 4.
            x[step]*=2;
            // console.log('Walking east one step');
        }
        return x;
    },
    // for/in
    squareValues: (x) => {
        for (const prop in x){
            x[prop]=Math.pow(x[prop],2);
        };
        return x;
    },
    // while
    whileLoop: (x) => {
        var i = 0;
        var answer = ''
        while (i < x){
            answer+=x;
            i++;
        };
        return answer;
    },
    // do while
    doWhileLoop: (x) => {
        var text = '';
        var i = '';
        do {
            i++;
            text+=i;
        }
        while (i < x);
        return text;
    },
    // forEach (with array and function)
    forEachLoop: (x) => {
        x.forEach(myFunction)
        // var counter=0;
        function myFunction(item, index, arr) {
            arr[index] = item*2;
        };
        return x;
    },
    // declare object
    arraysToObject: (name, value) => {
        const myObject = {};
        for (var step = 0; step < name.length; step++){
            myObject[name[step]]=value[step];
        }
        return myObject;
    },
    // lookup key to retrieve value
    lookupKey: (newObject) => {
        // return newObject.buddha;
        var myKey = Object.keys(newObject)[0];
        return newObject[myKey];
    },
};

export default syntax;

// --------------- Copy this section into your code syntax.js as comments --------

// define attributes / variables
    // number
    // string
    // boolean
    // array
    // dictionary / objects
    // undefined
// sample if / else
// functions
    // parameters
    // returns
// arrays
    // add to the front
    // add to the end
    // update values
// loops 
    // for
    // for/in
    // while
    // do while
    // forEach (with array and function)
// Objects / Dictionaries
    // declare object
    // lookup key to retrieve value

// --------------- Copy ends here --------