/*
    The problem is that we want to find duplicates in a T[] one-dimensional
    array of integers in O(N) running time where the integer values are smaller 
    than the length of the array!
*/
function duplicatesInArray(a: number[]) {
    for (let i = 0; i < a.length; i++) {
        a[a[i] % 10] = a[a[i] % 10] + 10;
    }

    a.forEach((element: number, index: number) => {
        if (element > 19) {
            console.log(`${index} is repeated!`);
        }
    });
}

duplicatesInArray([0, 4, 3, 2, 7, 8, 2, 3, 1]);