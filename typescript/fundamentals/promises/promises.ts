const t = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('t');
        }, 25)
    });
}
const axiosPost = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('t');
        }, 25)
    });
}
const ConnectionBuild = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('s');
        }, 25)
    });
}


const s = (t1: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        /// YOUr code here
    });
}




t()
.then((value: string) => {
    return ConnectionBuild()
})
.then((conn: any) => {
    return conn.start;
})
.then((value: string) => {
    return s(value)
})
.then((value: string) => {
    return s(value)
})
.then((value: string) => {
    connectionConfig(value)
})
.catch((e) => {

});








const GlobalConn: any = {};


const connectionConfig = (conn: any) => {
    conn.start()
}

