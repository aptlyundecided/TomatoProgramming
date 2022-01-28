const objA = {
    name: 'Alex',
    age: 35,
    mood: 'pissed'
};

const objB = {
    name: 'Hannah',
    age: 30,
    mood: 'chill'
};

const objC = {
    name: 'Alex',
    age: 35,
    mood: 'chill'
};

const l1 = [objA, objB];
const l2 = [objC, objB];


const filterFunc = (a, b) => {
    return a !== b;
};

const compareFunc = (l1: Array<any>, l2: Array<any>): boolean => {
    const keys = Object.keys(l1[0]);
    let changed = false;
    for (let i = 0; i < l1.length; i++) {
        keys.forEach((key: string) => {
            changed = l1[i][key] !== l2[i][key];
        });
        if (changed) break;
    }
    return changed;
};


function toEntries<T>(a: T[]) {
    return a.map((value, index) => [index, value] as const);
}
const compareFuncTwo = (l1: Array<any>, l2: Array<any>) => {
    const keys = Object.keys(l1[0]);
    let changed = false;
    for (const [index, value] of toEntries(l1)) {

        keys.forEach((key: string) => {
            if (value[key] !== l2[index][key]) {
                console.log('')
                console.log('Changed:')
                console.log(value[key]);
                console.log(l2[index][key]);
                changed = true;
            }
        });

        if (changed) break;
    }

    return changed;
}
console.log('')
console.log('')

compareFuncTwo(l1, l2);


// console.log('Object Lists Are Different');
// console.log(compareFunc(l1, l2));
// console.log('Object lists are different');
// console.log(compareFunc(l2, l2));