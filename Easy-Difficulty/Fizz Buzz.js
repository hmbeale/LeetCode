/**
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for
 the multiples of five output “Buzz”. For numbers which are multiples of both
 three and five output “FizzBuzz”.
*/


/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
   //take in n
   //make ordered str array

   //%3 && %5  fizzbuzz
   //%3 fizz


   let arr = [];

    for (let i = 1; i<=n; i++){
        if (i%3 == 0 && i%5 == 0){
            arr.push('FizzBuzz');
        }

        if (i%5 == 0 && i%3 != 0){
            arr.push('Buzz');
        }

        if (i%3 == 0 && i%5 != 0){
            arr.push('Fizz');
        }

        if(i%3 != 0 && i%5 != 0){
            arr.push(i.toString());
        }

    }

    return arr;

};
