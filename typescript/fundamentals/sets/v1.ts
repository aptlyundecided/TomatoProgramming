/**
 * Understanding set instance "has" truthiness
 * 
 * It seems like you can find something from within a set by it's actual
 * variable instance.
 */
const testSet = new Set();
testSet.add(1);
console.log('Check for a number');
console.log(testSet.has(1));

const xMaker = () => {
    return {
        name: 'x',
        value: 'ECKS'
    }
}


const x = xMaker();

const y = {
    name: 'y',
    value: 'WHY'
}

const z = xMaker();

const a = x;

testSet.add(x);

console.log('Check to see if a set has a variable by an instance reference');
console.log(testSet.has(x));

console.log('Check to see if a set contains a variable which has not been added');
console.log(testSet.has(y));

console.log('Check to see if a set has a variable by an instance type');
console.log(testSet.has(z));

console.log('Check to see if a set contains a variable by a reference to a reference to an instance');
console.log(testSet.has(a));