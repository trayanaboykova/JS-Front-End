let cars = ['BMW', 'Audi', 'Mercedess', 'Toyota', 'Honda'];
console.log(cars);

// Mutating methods
// Get and remove last element 
let lastCar = cars.pop();
console.log(lastCar);
console.log(cars);

// Add last element
let newLength = cars.push('Peugeot');
console.log(newLength);
console.log(cars);

// Remove first element
let firstCar = cars.shift();
console.log(firstCar);
console.log(cars);

// Add first element
let newUnshiftedLength = cars.unshift('BMW');
console.log(newUnshiftedLength);
console.log(cars);

// Remove item with splice
let deletedCares = cars.splice(2, 1);
console.log(deletedCares);
console.log(cars);

// Add item to array with splice
cars.splice(2, 0, 'VW');
console.log(cars);

// Add and remove items with splice
cars.splice(1, 3, 'Toyota', 'Audi');
console.log(cars);

// Reverse array
cars.reverse();
console.log(cars);

// Non-mutation methods
// Join array as string
let carString = cars.join(', ');
console.log(carString);

// Slice (not splice)
let middleCars = cars.slice(1, 3);
console.log(middleCars);
console.log(cars);

// Create shallow copy
let shallowCopy = cars.slice();

// Slice from middle to end
let endCars = cars.slice(1);
console.log(endCars);

// Check if element exists in array
let isToyotaIncluded = cars.includes('Toyota');
console.log(isToyotaIncluded);
let isMercedessIncluded = cars.includes('Mercedess');
console.log(isMercedessIncluded);

// Find index of element
let toyotaIndex = cars.indexOf('Toyota');
console.log(toyotaIndex);

// If there is no such item in the array
let mercedessIndex = cars.indexOf('Mercedess');
console.log(mercedessIndex);

// Find specific element
// let toyotaElement = cars.find(function (car) {
//     return car[0] === 'T';
// });
let toyotaElement = cars.find(car => car[0] === 'T');
console.log(toyotaElement);

// Find all indexes of toyotas
let topCars = ['Toyota', 'BMW', 'Toyota', 'Audi'];

let tIndex = topCars.indexOf('Toyota');
while (tIndex >= 0) {
    console.log(tIndex);

    tIndex = topCars.indexOf('Toyota', tIndex + 1);
}

// ForEach
cars.forEach(car => console.log(car));

// Map
let numbers = [1, 2, 3, 4, 5];
let doubleNubers = numbers.map(number => number * 2);
console.log(numbers);
console.log(doubleNubers);

// Filter
let oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log(oddNumbers);
console.log(numbers);

// Reduce!?!
let sum = numbers.reduce((sum, number) => sum + number, 0);
console.log(sum);

// Chaining
let doubleOddNumbers = numbers
    .filter(number => number % 2 !== 0)
    .map(number => number * 2);
console.log(doubleOddNumbers);
