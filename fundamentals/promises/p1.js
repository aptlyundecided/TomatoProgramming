const dbGetCall = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                paulsData: {
                    success: true,
                    value: '1000%',
                    quit: false
                }
            });
        }, 1000);
    });
};

const TestSend = (data) => {
    console.log('---------');
    console.log(data);
    console.log('---------');
};

dbGetCall()
.then((paulsData) => {
    TestSend(paulsData);
})
.catch((e) => {
    reject({
        msg: 'should not fail, but just in case'
    })
})