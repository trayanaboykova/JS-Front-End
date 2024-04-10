function reverseElements(n, array) {
    let newArray = array.slice(0, n).reverse();
    console.log(newArray.join(' '));
  }