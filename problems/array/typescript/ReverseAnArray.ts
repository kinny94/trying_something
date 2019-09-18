/*
The problem is that we want to reverse a T[] array in O(N) linear time complexity and we want the algorithm to be in-place as well!
For example: input is [1,2,3,4,5] then the output is [5,4,3,2,1]
*/

function reverseAnArray(array: number[]) {
    const ITERATION = Math.ceil(array.length / 2);
    console.log(ITERATION);
    for (let i = 0; i < ITERATION;  i++) {
        const TEMP = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = TEMP;
    }
    return array;
}

console.log(reverseAnArray([1, 2, 3, 4, 5]));
console.log(reverseAnArray([1, 2, 3, 4, 5, 6]));
