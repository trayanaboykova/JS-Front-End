function sortNumbers(array) {
    const sorted = array.sort((a, b) => a - b);
    const result = [];
    let i = 0;
    let j = sorted.length - 1;
    
    while (i <= j) {
      if (i === j) {
        result.push(sorted[i]);
      } else {
        result.push(sorted[i], sorted[j]);
      }
      i++;
      j--;
    }
    
    return result;
  }
  