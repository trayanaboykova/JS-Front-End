// Declare variables
let a = 10;
let b = 20;

// Reassign variable defined with let
a = 11;
console.log(a + b);

var c = 30; // before ES2015 (legacy) - not recommended to use
console.log(c + a);

const pi = 3.14159265359; // Constant variable

// Conditional Statements
if (a < 10) {
    console.log('a is lower then 10');
} else if (a < 20) {
    console.log('a is lower than 20');
} else {
    console.log('a is higher than or equal to 20');
}

// Function declaration
function add(first, second) {
    console.log(first + second);
}

// Function invocation
add(1, pi);

// Console print with string concatenation
console.log('The number pi is: ' + pi + '!')

// String interpolation / template literal
console.log(`The number pi is: ${pi}!!`);

// Fix the number output
let num = 5.19923;
console.log(num.toFixed(2));

// Single  vs double quotes for strings
console.log("mr." + 'Pesho: K\'vo staa'); // Not recommended to mix both
console.log("Gosho: K'vo staaa");

// Rounding vs toFixed
console.log(pi.toFixed(5));
console.log(Math.round(pi));

// Switch statement
const firstName = 'pesho';
switch (firstName) {
    case 'gosho':
        console.log('Zdrasti gosho');
        break;
    case 'pesho':
        console.log('Maraba pesho');
        break;
    default:
        console.log('Koi si ti?');
        break;
}

// Truthy and falsy values
if (firstName) {
    console.log('There is pesho');
} else {
    console.log('There is no pesho');
}

// For loop
for (let i = 0; i < 10; i++) {
    // console.log(i);
}

// While loop
let i = 0;
while (i < 10) {
    // console.log(i);
    i++;
}

// Undefined
let futureValue;
console.log(futureValue);
