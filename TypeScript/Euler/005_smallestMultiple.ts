/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder. 
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/


const isDivisibleBy = (dividend: number, divisor: number) => {
    return dividend % divisor === 0;
}


const getSmallestNumber = (ceil: number) => {
    let smallestNumber = ceil;
    let startingPoint = ceil;

    outer: while (smallestNumber === ceil) {
        inner: for (let i = 1; i < (ceil + 1); i++) {
            // console.log(startingPoint)
            if (!isDivisibleBy(startingPoint, i)) {
                startingPoint++;
                continue outer;
            }
        }
        smallestNumber = startingPoint;
        break;
    }

    return smallestNumber;
}

console.log(getSmallestNumber(20))