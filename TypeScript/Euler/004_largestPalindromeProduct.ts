/*
A palindromic number reads the same both ways. The largest palindrome made from 
the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

const isPalindrome = (input: number | string): boolean => {
    const reversedInput = input.toString().split('').reverse().join('');
    return input.toString() === reversedInput;
};

console.log(isPalindrome(343));

// This sounds like it needs a recursive solution

// Max 3 Digit Number === 999, need to work backwards

const calculateProducts = (n: number) => {
    const productPalindromeArray: number[] = [];
    const cache = new Set();

    outer: for (let i = n; i > 0; i--) {
        // productArray.push(i * n)
        inner: for (let j = n; j > 0; j--) {
            const product: number = i * j;
            if (cache.has(product)) {
                continue inner;
            } else {
                cache.add(product)
                // console.log(`${i} x ${j} is ${product}`)
                if (isPalindrome(product)) {
                    productPalindromeArray.push(product)
                }
            }

        }
    }

    console.log(productPalindromeArray)
    // sorted in desc order
    const sortedProductArray: number[] = productPalindromeArray.sort((a, b) => b - a);
    return sortedProductArray[0];
}

console.log(calculateProducts(999))