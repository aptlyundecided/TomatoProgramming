let b: boolean = false;
const sometimes: boolean = false;



function littleFunction (): boolean {
    return true || (sometimes === true);
}

function anotherLittleFunction (): boolean {
    return false;
}


// b := true || (sometimes = true);

b = littleFunction() || anotherLittleFunction();