const TwoProp = {
    propOne: 1,
    propTwo: 2
};

const ThreeProp = {
    propOne: 1,
    propTwo: 2,
    propThree: 3
};

const newGuy = Object.assign({}, TwoProp, ThreeProp);

console.log(newGuy);