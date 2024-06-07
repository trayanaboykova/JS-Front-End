// Declare an array
const numbers = [1, 2, 3, 4, 5, 6];
let names = ['Stoyan', 'Pesho', 'Gosho'];

// Declare an empty array
let empty = []; // Truthy value

// Change array by refference
numbers[0] = 10;
console.log(numbers);

// Dynamically add elements to an array
console.log(empty);
empty[0] = 1;
empty[1] = 2;
console.log(empty);

// Get length of an index
console.log(names.length);

// Accessing by index
let firstName = names[0];
let lastName = names[names.length - 1];
console.log(firstName);
console.log(lastName);

// Accessing invalid index
console.log(names[3]);
console.log(names[-1]);

// Array destructuring assignment
let [firstNumber, secondNumber, thirdNumber, ...restNumbers] = numbers;
console.log(firstNumber);
console.log(secondNumber);
console.log(thirdNumber);
console.log(restNumbers);

// For loop
// for (let i = 0; i < names.length;  i++) {
//     console.log(names[i]);
// }

// For of loop
for (let name of names) {
    console.log(name);
}

// Array hack 1
names[10] = 'Stamat';
console.log(names.length);
console.log(names);


// Array hack 2
let arr = [1, 2, 3];
console.log(arr.length);
arr.length = 10;
console.log(arr);
arr.length = 2;
console.log(arr);
