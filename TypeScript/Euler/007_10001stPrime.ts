/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?
*/

// Find a way to know if num is prime
// Maybe there is an equation to know all prime numbers
// Have a counter that increases by 1 every time a prime number is encountered
// while counter is not 10001 keep going
// exit immediately and return if counter === 10001
import { isPrime } from './003_largestPrimeFactors';

const isPrimeV2 = (n: number) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

// console.log(isPrimeV2(3))


const findNthPrime = (n: number) => {
    if (n < 1) throw new Error('Number must be 1 or greater than 1');
    let primeCounter = 1;
    let currentNumber = 2;

    while (primeCounter !== n) {
        // console.log(`Prime counter: ${primeCounter} & Current Value: ${currentNumber}`)
        // if (isPrimeV2(currentNumber)) {
        //     if (primeCounter === n) {
        //         return currentNumber;
        //     }
        //     primeCounter++;
        //     currentNumber++
        // }
        // currentNumber++
    }

    console.log(primeCounter)

    return -1;
}

console.log(findNthPrime(3))