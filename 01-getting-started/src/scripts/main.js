import functions from './functions.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

var num = 1;
var number1 = "";
var number2 = "";
var operator = "";
var calculatorText = "";

var elements = document.getElementsByClassName("clickable");
Array.from(elements).forEach(function(element) {
        element.addEventListener('click', function(){
            switch(functions.calc(event.target.textContent)) {
                case 'buildnum':
                    (num===1) ? number1 += event.target.textContent : number2 += event.target.textContent;
                    break;
                case 'decimal':
                    (num===1) ? (!number1.includes('.')) ? number1 += event.target.textContent : '' : (!number2.includes('.')) ? number2 += event.target.textContent : '';
                    console.log('number2', number2);
                    break;
                case 'divide':
                    if (num===1) {
                        num = 2;
                        operator = '÷';
                    };
                    break;
                case 'multiply':
                    if (num===1) {
                        num = 2;
                        operator = '×';
                    };
                    break;
                case 'subtract':
                    if (num===1) {
                        num = 2;
                        operator = '-';
                    };
                    break;
                case 'add':
                    if (num===1) {
                        num = 2;
                        operator = '+';
                    };
                    break;
                case 'equal':
                    if (number1 != "" && number2 != "") {
                        console.log(`num1 and num2 are non-blank, to call 'equal' function.`);
                        switch(operator) {
                            case '÷':
                                answer.textContent = functions.divide(number1, number2);
                                break;
                            case '×':
                                answer.textContent = functions.multiply(number1, number2);
                                break;
                            case '-':
                                answer.textContent = functions.subtract(Number(number1), Number(number2));
                                break;
                            case '+':            
                                answer.textContent = functions.add(Number(number1) + Number(number2));
                                break;
                        };
                        num = 1;
                        calculatorText = '';
                        number1 = '';
                        number2 = '';
                        operator = '';
                    };
                    break;
                case 'clear':
                    num = 1;
                    calculatorText = '';
                    number1 = '';
                    number2 = '';
                    operator = '';
                    calctext.textContent = '';
                    answer.textContent = '';
                    break;
            }
            calculatorText = number1 + operator + number2;
            if (calculatorText.length > 15) {
                calctext.textContent = calculatorText.substring(calculatorText.length - 15, calculatorText.length);
            } else {
                calctext.textContent = calculatorText
            }
        
    })
});


// var elements = document.getElementsByClassName("clickable");
// Array.from(elements).forEach(function(element) {
//         element.addEventListener('click', function(){
//         (functions.calc(event.target.textContent) === 'buildnum') ? number1 += event.target.textContent  : '';
//         console.log(number1);
        
//     })
// });

// var elements = document.getElementsByClassName("clickable");
// Array.from(elements).forEach(function(element) {
//     element.addEventListener('click', function(event){
//         calctext.textContent = event.target.textContent;
//     })
// });


