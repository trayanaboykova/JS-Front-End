function modifyNumber(number) {
    const calculateAverage = num => {
        let sum = 0;
        let digits = num.toString().split('');
        digits.forEach(digit => {
            sum += parseInt(digit, 10);
        });
        return sum / digits.length;
    };

    let average = calculateAverage(number);

    while (average <= 5) {
        number = number.toString() + '9';
        average = calculateAverage(number);
    }

    console.log(number);
}

