function parkingLot(input) {
    let parking = new Set();
  
    for (let i = 0; i < input.length; i++) {
      let [direction, carNumber] = input[i].split(", ");
      if (direction === "IN") {
        parking.add(carNumber);
      } else {
        parking.delete(carNumber);
      }
    }
  
    let output = Array.from(parking).sort();
    if (output.length === 0) {
      console.log("Parking Lot is Empty");
    } else {
      console.log(output.join("\n"));
    }
  }
  