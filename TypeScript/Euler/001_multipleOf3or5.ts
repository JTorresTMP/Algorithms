/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6, and 9.
The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000
*/

// returnSum(1000, [3, 5])
const returnSum = (ceil: number, numArray: number[]): number => {
    const multiples: number[] = [];

    for (let i = 1; i < ceil; i++) {
        if (i % 5 === 0 || i % 3 === 0) multiples.push(i)
    }

    console.log(multiples)
    // calc sum here
    const sum = multiples.reduce((start, curr) => start + curr);
    return sum;
}

console.log(returnSum(1000, [3, 5]))

'Time Complexity'