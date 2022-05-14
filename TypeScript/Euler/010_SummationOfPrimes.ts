/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17

Find the sum of all primes below two million.
*/
import { isPrime } from "./003_largestPrimeFactors";

const recursiveIsPrime = (n: number) => {
    if (n <= 1) return false;
    if (n === 2) return true;

    let num = Math.sqrt(n);

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

const summationOfPrimes = () => {
    const upperLimit = 2000000;
    const primes: number[] = [];

    for (let i = 1; i < upperLimit; i++) {
        if (recursiveIsPrime(i)) {
            primes.push(i)
        }
    }

    console.log(primes);
    const answer = primes.reduce((agg, curr) => agg + curr, 0);

    return answer;
}

console.log(summationOfPrimes());

// Saturday