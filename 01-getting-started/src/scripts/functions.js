import provinces from './provinces.js';
const functions = {

    size: (num) => {
        if (num < 10) return "small";
        if (num < 20) return "medium";
        if (num < 101) return "large";
        return "extra large";
    },

    add: (num1, num2) => {
        return num1 + num2;
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    },

    multiply: (num1, num2) => {
        return num1 * num2;
    },

    divide: (num1, num2) => {
        return num1 / num2;
    },

    // This is an impure interfacing function
    getValues: () => {
        return [Number(document.getElementById("var1").value),Number(document.getElementById("var2").value)];
    },

    isEven: (num1) => {
        return (num1%2===0) ? true : false;
    },

    fedTaxes: (num1) => {
        const brackets = [0,0,0,0,0],
            taxLevels = [214368,150473,97069,48535,0],
            taxRates = [.33,.29,.26,.205,.15]
        let index,
            taxes = 0;
        for (index = 0; index < brackets.length; ++index) {
            if (num1 > taxLevels[index]) {
                brackets[index] = num1 - taxLevels[index];
                num1 = taxLevels[index];
                taxes=taxes+brackets[index]*taxRates[index];
            }           
        };
        return Math.round((taxes) * 100) / 100; // Add 2nd digit rounding

    },
    addNumToArray: (myArray, num1) => {
        myArray.push(num1);
        return myArray;
    },
    totalArray: (myArray) => {
        let myTotal = myArray.reduce((acc,val) => acc+val,0);
        return myTotal;
    },
    clearArray: (myArray) => {
        myArray = [];
        return myArray;
    },
    lookupProv: (prov) => {
        return (provinces[prov.toUpperCase()]===undefined) ? 'Not a valid province code.' : provinces[prov.toUpperCase()];
    }
};

export default functions;
