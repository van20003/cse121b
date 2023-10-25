// copyright year
document.querySelector('#year').textContent = new Date().getFullYear();

// toggle menu in small view
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}

document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);


// Import helper 
import { calculateTip, updateTipDisplay } from './tipCalculator.js';

// DOM elements
const billInput = document.getElementById("bill");
const tipSelect = document.getElementById("tipAmount");
const calculateButton = document.getElementById("calculateButton");

// Attach event to button
calculateButton.addEventListener('click', () => {


// Get values of Total Cost and Tip Percent
    const totalBill = parseFloat(billInput.value);
    const tipAmount = parseFloat(tipSelect.value);

// Calculate tip
    const total = calculateTip(totalBill, tipAmount);

// Display tip
    updateTipDisplay(total);
});