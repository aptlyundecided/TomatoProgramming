const positionlist = [
    {
        id: 1234,
        value: 500000,
        convRef: 'hey'
    },
    {
        id: 12098,
        value: 500000,
        convRef: 'ho'
    },
    {
        id: 1237,
        value: 500000,
        convRef: 'lets'
    },
    {
        id: 1123,
        value: 500000,
        convRef: 'go'
    },
    {
        id: 1123,
        value: 500000,
        convRef: '6013'
    }
]


// function --> targetConveyorReference
// NOTE: Target is likely a temp value:
const target = '6013';

// index: temp
for (let i = 0; i < positionlist.length; i += 1) {
    if (positionlist[i].convRef === target) {
        console.log(positionlist[i]);
        // TODO: Make the assignment of the max encoder value
    }
}
