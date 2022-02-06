/*
The sum of the squares of the first ten natural numbers is,
1**2 + 2**2 + ... + 10**2 == 385
The square of the sum of the first ten natural numbers is,
(1 + 2 + 3 + ... + 10)**2 = 55 ** 2 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is
3025 - 385 = 2640
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum
*/

const getSumOfSquaresUpTo = (n: number) => {
    let result: number = 0;

    for (let i = 1; i < (n + 1); i++) {
        result += (i ** 2)
    }

    return result;
}

console.log(getSumOfSquaresUpTo(10))

const getSumOfFirstNNumbers = (n: number): any => {
    if (n < 0) throw new Error('Parameter cannot be less than zero.')
    if (n === 0) return 0;

    return n + getSumOfFirstNNumbers(n - 1);
}

console.log(getSumOfFirstNNumbers(10) ** 2)

const getSumSquareDifference = (n: number) => {
    const sumOfSquares: number = getSumOfSquaresUpTo(n);
    const squareOfSum: number = getSumOfFirstNNumbers(n) ** 2;

    return squareOfSum - sumOfSquares;
}

console.log(getSumSquareDifference(100))