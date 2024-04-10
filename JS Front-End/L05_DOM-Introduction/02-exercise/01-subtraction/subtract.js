function subtract() {
    // Get the first and second number input fields
    let firstNumberInput = document.getElementById('firstNumber');
    let secondNumberInput = document.getElementById('secondNumber');

    // Compute the subtraction of the second number from the first
    let result = Number(firstNumberInput.value) - Number(secondNumberInput.value);

    // Get the result div and set its text to the result of the subtraction
    let resultDiv = document.getElementById('result');
    resultDiv.textContent = result;
}