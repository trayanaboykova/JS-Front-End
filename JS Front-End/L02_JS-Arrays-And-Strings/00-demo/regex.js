let text = 'I am JavaScript developer, JavaScript is awesome!';

// RegExp literal
let pattern = /(java)script/ig;

// RegExp function constructor
let neshtosi = 'Script';
let pattern2 = new RegExp(`Java${neshtosi}`, 'ig');

// test pattern
console.log(pattern.test(text));

// match by pattern
console.log(pattern2.exec(text));
console.log(pattern2.exec(text));
console.log(pattern2.exec(text));

// String regex methods
console.log(text.match(pattern));
console.log('-----------------------');
const matches = text.matchAll(pattern);
for (const match of matches) {
    console.log(match);
}

// How to count matches
console.log((Array.from(matches)).length);

// Replace with regex
console.log(text.replace(/JavaScript/g, 'C#'));
