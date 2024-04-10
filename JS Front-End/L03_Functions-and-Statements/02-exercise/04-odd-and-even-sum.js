function sumEvenOddDigits(num) {
    let evenSum = 0;
    let oddSum = 0;
  
    while (num > 0) {
      const digit = num % 10;
      if (digit % 2 === 0) {
        evenSum += digit;
      } else {
        oddSum += digit;
      }
      num = Math.floor(num / 10);
    }
  
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
  }
  