function calc() {
    const firstInputElement = document.getElementById('num1');
    const secondInputElement = document.getElementById('num2');
    const sumInputElement = document.querySelector('#sum');

    const fistNumber = Number(firstInputElement.value);
    const secondNumber = Number(secondInputElement.value);

    sumInputElement.value = fistNumber + secondNumber;
}
