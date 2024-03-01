function sameDigits(num) {
    const numStr = num.toString();
    const firstDigit = numStr[0];
    let same = true;
    let sum = 0;
    
    for (let i = 0; i < numStr.length; i++) {
      if (numStr[i] !== firstDigit) {
        same = false;
      }
      sum += parseInt(numStr[i]);
    }
    
    console.log(same);
    console.log(sum);
  }
  