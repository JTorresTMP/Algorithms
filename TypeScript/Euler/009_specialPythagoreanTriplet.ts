/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a**2 + b**2 = c**2

For example, 3**2 + 4**2 = 9 + 16 = 25 = 5**2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

/*
First thing I need to do is identify all pythagorean triplets until sum is equal to 1000

Once I find those I just need to multiply them
*/

/*
This is not my code, but I thought it interesting to list the bruteForce approach and why it works.
This code essentially checks all possible values of a and b, and calculates c to see if those numbers are a solution.

This also leverages the fact that a < b < c.

*/

const bruteForce = () => {
    let a = 0;
    let b = 0;
    let c = 0;
    let target = 1000;
    let found = false;

    for (a = 1; a < (target / 3); a++) {
        for (b = a; b < (target / 2); b++) {
            c = target - a - b;

            if (a * a + b * b === c * c) {
                found = true;
                break;
            }
        }
        if (found) {
            break;
        }
    }

    console.log(a, b, c);
    console.log(`The product of these numbers is ${a * b * c}`)
}

bruteForce();