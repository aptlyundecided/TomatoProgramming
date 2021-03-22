

const X = (fName1: (fName2: () => string) => void, fName2: () => string) => {
    fName1(fName2);
}

const f1 = (fr: () => string): void => {
    console.log(fr())
}


const f2 = (): string => {
    return 'Nested Parameter Test';
}

X(f1, f2)

/**
 * Hub ready type description
 */
type HubReady = {
    name: string;
}
/**
 * Create type for unique function type
 */
type BoolFunc = (ready: boolean) => void;

const addSub = (sub: string, readyhandler: BoolFunc): HubReady => {
    return {
        name: 'test'
    }
}