function solve(numbers) {
    let firstNumber = numbers.shift();
    let lastNumber = numbers.pop();

    console.log(firstNumber + lastNumber);
}

solve([20, 30, 40])
