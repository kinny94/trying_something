function ReservoirSamplingAlgo(array: number[], k: number) {

    // create a new array for k items
    let reservoir: number[] = new Array<number>(k);

    // copy the first k items from the original array
    for (let i = 0; i < reservoir.length; i++) {
        reservoir[i] = array[i];
    }

    // we consider the items from the original array
    // k+1 because we have already copied the first k items
    // the i-th item is chosen to be included in the reservoir with probability k/i
    for ( let i = k + 1; i < array.length; i++) {
        const j = Math.floor(Math.random() * i);
        if (j < k) {
            reservoir[j] = array[i];
        }
    }

    for (let i = 0; i < reservoir.length; i++) {
        console.log(reservoir[i] + ' ');
    }
}

ReservoirSamplingAlgo([13, 65, 46, 11, 71, 50, 12, 5, 81, 97, 28, 74, 87, 68, 42, 31, 40, 37, 43, 25], 5);