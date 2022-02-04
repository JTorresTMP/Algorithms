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