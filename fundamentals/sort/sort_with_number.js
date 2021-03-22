/**
 * Sort With Number
 * ---
 * This whole file is meant for me to get a better understanding of what
 * is a good way to separate a string from a number, so that it's easier
 * to find entities by their name and ID with a single 'function'
 * or a function pipe.
 */
const items =  [
    'item 7',
    'item 1',
    'item 3',
    'item 10',
    'item 100',
    'item 200',
    'item 2',
    'thing 1',
    'thing 2'
];
/**
 * Pattern to extract numbers from strings.
 */
const pattern = /^(0|[1-9][0-9]{0,2}(?:(,[0-9]{3})*|[0-9]*))(\.[0-9]+){0,1}$/;
const pattern2 = /\d+/g;
const pattern3 = /\d+/;

const item1 = pattern.test(items[0])
console.log(pattern.test(1));
console.log(pattern.test('1'));
console.log(pattern.test('7'));
console.log(pattern.test(items[0]))

console.log('Pattern 2');
console.log(pattern2.test('7'))
// console.log(pattern2.test(items[0]))

// const 

// const s = items[0].split(pattern2);
// const x = '12 13 14 15'.split(pattern2);
// console.log(s);
// console.log(x);
// const y = pattern2.exec('12 13 14 150');
// console.log(y);

let m;
while ((m = pattern2.exec('f12 wer13 fsda14fda z!@15#$%^&&*()_')) != null) {
    // alert(m[0]);
    console.log(m[0]);
}
/**
 * So here I've learned that you can run .exec() on a regex, and it'll
 * return this sort of array with a description about how it was used
 * against a string of some sort.
 * 
 * It's also possible that here the .exec() will return null.
 */
console.log(pattern3.exec('item 2')[0])
console.log(typeof pattern3.exec('item'))
console.log(pattern3.exec('item'))