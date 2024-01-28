/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function addNumbers() {
let addNumber1 = Number(document.querySelector("#add1").value);
let addNumber2 = Number(document.querySelector("#add2").value);
let sum = (addNumber1 + addNumber2);
document.querySelector("#sum").value = sum;
}


/* Function Expression - Subtract Numbers */

function subtractNumbers() {
let subtractNumber1 = Number(document.querySelector("#subtract1").value);
let subtractNumber2 = Number(document.querySelector("#subtract2").value);
let difference = (subtractNumber1 - subtractNumber2); 
document.querySelector("#difference").value = difference; 
}


/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;
const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector("#factor1").value);
    let factor2 = Number(document.querySelector("#factor2").value);
    let product = multiply(factor1, factor2);
    document.querySelector("#product").value = product;

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);
}

/* Open Function Use - Divide Numbers */

function divide(number1, number2) {
    return number1 / number2;
}
const divideNumbers = function() {
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);
    let quotient = divide(dividend, divisor);
    document.querySelector("#quotient").value = quotient;
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);


document.querySelector("#addNumbers").addEventListener("click", addNumbers);
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
let currentDate = new Date();
let currentYear =  currentDate.getFullYear();
document.querySelector("#year").textContent = currentYear;

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Source Array */
document.querySelector("#array").textContent = numbersArray;
/* Output Odds Only Array */
document.querySelector("#odds").textContent = numbersArray.filter(number => number % 2 === 1);
/* Output Evens Only Array */
document.querySelector("#evens").textContent = numbersArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").textContent = numbersArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").textContent = numbersArray.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);


