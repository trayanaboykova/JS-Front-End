function calculateOrderPrice(product, quantity) {
    let price;
    switch (product) {
      case "coffee":
        price = 1.5;
        break;
      case "water":
        price = 1.0;
        break;
      case "coke":
        price = 1.4;
        break;
      case "snacks":
        price = 2.0;
        break;
      default:
        console.log("Invalid product.");
        return;
    }
    let totalPrice = price * quantity;
    console.log(totalPrice.toFixed(2));
  }
  