const pairs = {
    '{': '}',
    '[': ']',
    '(': ')'
};

const openers = [
    '{', '[', '('
];

const closers = [
    '}', ']', ')'
];


export const ValidParentheses = (s: string) => {
    const a = s.split('');
    const unmatched = [];
    let pass = true;
    a.map((char: string, i: number) => {
        // Check that this is an opening bracket.
        if (pairs[char]) {
            unmatched.push(char);
        } else {
            // remove closing bracket from list if it matches.
            if (pairs[unmatched[unmatched.length -1]] === char) {
                unmatched.pop();
            } else {
                unmatched.push(char);
            }
        }
    });

    if (unmatched.length > 0) {
        pass = false;
    }
    return pass;
};
