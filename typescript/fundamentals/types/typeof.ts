type S = string;

const x: S = 'IAMSTRING';
console.log('Check for typeof "string"');
console.log(typeof x);

type T = {
    name: string;
    value: number;
}

const f3 = () => {
    return {
        name: 'test type thingy',
        value: 100
    }
}

let r4 = typeof T;