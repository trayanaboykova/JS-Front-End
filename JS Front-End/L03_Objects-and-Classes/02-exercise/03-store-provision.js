function store(arr1, arr2) {
    let stock = {};
  
    for (let i = 0; i < arr1.length; i += 2) {
      let product = arr1[i];
      let quantity = Number(arr1[i + 1]);
  
      stock[product] = quantity;
    }
  
    for (let i = 0; i < arr2.length; i += 2) {
      let product = arr2[i];
      let quantity = Number(arr2[i + 1]);
  
      if (stock.hasOwnProperty(product)) {
        stock[product] += quantity;
      } else {
        stock[product] = quantity;
      }
    }
  
    for (let product in stock) {
      console.log(`${product} -> ${stock[product]}`);
    }
  }
  