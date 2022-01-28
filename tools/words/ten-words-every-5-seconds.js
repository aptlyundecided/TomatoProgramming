const randomWords = require('random-words');

let count = 0;

const ShowTen = () => {
    const ten = randomWords(10);
    count += 1;
    // console.log(ten);
    console.log(ten.join(' '));
    console.log(`Set # : ${count}`);
    console.log('');
}

const TheInterval = setInterval(ShowTen, 10000);
ShowTen();
// TheInterval.start();