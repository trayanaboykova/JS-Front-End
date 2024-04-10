function checkPalindromes(arr) {
    for (let num of arr) {
      const str = num.toString();
      const reversedStr = str.split("").reverse().join("");
      if (str === reversedStr) {
        console.log("true");
      } else {
        console.log("false");
      }
    }
  }
  