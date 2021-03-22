const testSet2 = new Set();

const one = 1;
const two = 1;

// Add 1 to the set, by it's variable reference.
testSet2.add(one);

console.log('contains primitive type of 1');
console.log(testSet2.has(1));

console.log('contains variable reference to primitive value of 1 type number');
console.log(testSet2.has(one));

console.log('contains different variable reference to primitive value of 1 type number')
console.log(testSet2.has(two));