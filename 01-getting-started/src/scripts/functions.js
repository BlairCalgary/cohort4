const functions = {
    
    size: (num) => {
        if (num < 10) return "small";
        if (num < 20) return "medium";
        if (num > 100) return "extra large";
        return "large";
    },

    add: (num1, num2) => {
        return num1 + num2;
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    },

    divide: (num1, num2) => {
        return num1 / num2;
    },

    multiply: (num1, num2) => {
        return num1 * num2;
    },

    calc: (num1) => {
        if ("0123456789".includes(num1)) {
            return 'buildnum';
        } else if (num1 === ".") {
            return 'decimal';
        } else if (num1 === "÷") {
            return 'divide';
        } else if (num1 === "×") {
            return 'multiply';
        } else if (num1 === "-") {
            return 'subtract';
        } else if (num1 === "+") {
            return 'add';
        } else if (num1 === "=") {
            return 'equal';
        } else if (num1 === "C") {
            return 'clear';
        } 
    },

    buildnum: (num1) => {
        number1 = number1 + num1;
        console.log(number1);
    },
};

export default functions;
