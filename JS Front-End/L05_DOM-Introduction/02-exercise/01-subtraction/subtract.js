function subtract() {
    let firstNumberInput = document.getElementById('firstNumber');
    let secondNumberInput = document.getElementById('secondNumber');

    let result = Number(firstNumberInput.value) - Number(secondNumberInput.value);

    let resultDiv = document.getElementById('result');
    resultDiv.textContent = result;
}