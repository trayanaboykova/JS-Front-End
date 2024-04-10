function calculate(number1, operator, number2) {
    let result;

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            // Check for division by zero
            if (number2 === 0) {
                console.log("Cannot divide by zero");
                return;
            }
            result = number1 / number2;
            break;
        default:
            console.log("Invalid operator");
            return;
    }

    console.log(result.toFixed(2));
}

