console.log('Shallow: 1 == "1"');
console.log(1 == '1');      // Checks only value

console.log('Deep Equals: 1 === "1"');
console.log(1 === '1');     // Checks type AND value

console.log('Deep Equals: 2 === "1"')
console.log(2 === '1');

console.log('Deep Equals: 1 === 1');
console.log(1 === 1);


let x;


let y = {};

console.log('X is Undefined');
console.log(typeof x);
console.log(typeof x === 'undefined');
console.log(x === undefined);
console.log(x == undefined);

console.log('Properties of Y do not exist');
console.log(y.x === undefined);