function rotateArray(arr, num) {
    let rotated = arr.slice(num % arr.length);
    let remaining = arr.slice(0, num % arr.length);
    let result = rotated.concat(remaining);
    console.log(result.join(' '));
  }
  