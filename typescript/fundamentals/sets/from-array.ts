const list = [ 1, 1, 1, 1, 2, 3, 4, 5, 5, 5, 5, 5];
/**
 * Accepts an array of primitives and creates a unique set
 * from them.
 */
const set = new Set(list);
set.forEach((i: number) => {
    console.log(i);
})
console.log(set);