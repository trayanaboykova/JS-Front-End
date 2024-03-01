function buyFruit(fruit, weight, pricePerKg) {
    let totalCost = (weight / 1000) * pricePerKg;
    console.log(`I need $${totalCost.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`);
  }
  