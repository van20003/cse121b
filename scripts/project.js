
// Calculate the tips
export function calculateTip(totalBill, tipAmount) {
    return totalBill * tipAmount;
}

// Display results total
export function updateTipDisplay(total) {
    const tipElement = document.getElementById("tip");
    tipElement.innerHTML = `$${total.toFixed(2)}`;
}
