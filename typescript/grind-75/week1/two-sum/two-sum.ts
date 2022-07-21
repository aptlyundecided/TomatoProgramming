/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 */
export const TwoSum = (inputs: number[], target: number): number[] => {
    let set = [];
    for (let i = 0; i <= inputs.length; i += 1) {
        if (set.length > 0) {
            break;
        }
        for (let j = 0; j <= inputs.length; j += 1) {
            if (i !== j) {
                if (inputs[i] + inputs[j] === target) {
                    set.push(i);
                    set.push(j);
                    break;
                }
            }
        }
    }
    return set;
}