/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143?
*/

// identify if num is prime
// a prime number is a number that is only divisible by itself (whole numbers)


// const isPrimeRecursive = (n: number) => {
//     let i = 1;

//     if (n === 0 || n === 1) {
//         return false;
//     }

//     if (n === i) return true;

//     if (n % i === 0) {
//         return false
//     }

//     i++;

//     return isPrime(n);
// }

// console.log(isPrimeRecursive(5))
// identify if num is factor
// we need to know if a number is a whole number

// currentMax, re assign this variable as needed and return at the end

const isPrime = (n: number) => {
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) {
            // console.log(`Number ${n} is divisible by ${i}`)
            return false;
        }
    }

    return true;
}

const findFactors = (n: number) => {
    const factors: number[] = [];

    for (let i = 0; i < Math.sqrt(n); i++) {
        if (n % i === 0) {
            factors.push(i, n / i)
        }
    }

    return factors;
}

const getLargestPrimeFactor = (n: number) => {
    const factorList: number[] = findFactors(n);
    let maxPrimeFactor: number = 0;

    for (let num of factorList) {
        if (isPrime(num) && num > maxPrimeFactor) {
            maxPrimeFactor = num;
        }
    }

    return maxPrimeFactor;
}

console.log(getLargestPrimeFactor(600851475143));