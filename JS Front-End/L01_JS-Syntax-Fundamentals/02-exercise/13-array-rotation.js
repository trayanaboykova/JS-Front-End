function rotateArray(arr, num) {
    // slice the array into two parts - rotated and remaining
    let rotated = arr.slice(num % arr.length);
    let remaining = arr.slice(0, num % arr.length);
    // concatenate the rotated part with the remaining part
    let result = rotated.concat(remaining);
    // print the resulting array elements separated by a single space
    console.log(result.join(' '));
  }
  