//https://leetcode.com/problems/climbing-stairs/submissions/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    //find smallest
    //and then replace all 2 steps with 2 one steps
    //one at a time

    //let minSteps = 0;
    //let maxSteps = 0;

    //47
    //if it's odd subtract one and then divide by two
    //46 + 1
    //23(2) + 1
    //24 smallest steps

    //expand twos
    //22(2) + 1 + 1 + 1
    //25 steps

    //...

    //1(47)
    //47 steps

    //47-24 = number of different steps
    //23 combinations

    //n is odd
    //if (n%2 == 0) minSteps = n/2;
    //if (n%2 != 0) minSteps = ((n-1)/2) + 1

    //maxSteps = n;

   //min steps 2
   //
   //max steps 5

   //convert odd to even

   //if even it's always one more than previous even number

   //n = 2
   //(1) 1 1 (2) 2

   //n = 4
   //(1) 1 1 1 1 (2) 2 1 1 (3) 2 2
   //(4) 1 2 1 (5) 1 1 2


   //n = 6
   //(1) 1 1 1 1 1 1 (2) 2 1 1 1 1 (3) 2 2 1 1 (4) 2 2 2
   //(5) 1 2 1 1 1 (6) 1 1 2 1 1 (7) 1 1 1 2 1  (8) 1 1 1 1 2
   //(9) 2 1 2 1 (10) 2 1 1 2 (11) 1 2 2 1 (12) 1 2 1 2 (13) 1 1 2 2
   //I think!

   //n = 8
   //(1) 1 1 1 1 1 1 1 1 (2) 2 1 1 1 1 1 1 (3) 2 2 1 1 1 1 (4) 2 2 2 1 1 (5) 2 2 2 2
   //and other combinations

   //n/2 + 1

   //when n is even the solution is n/2 + 1

   //n = 1
   //(1) 1

   //n = 3
   //(1) 1 1 1 (2) 2 1
   //(3) 1 2

   //n = 5
   //(1) 1 1 1 1 1 (2) 2 1 1 1 (3) 2 2 1
   //(4) 1 2 1 1 (5) 1 1 2 1 (6) 1 1 1 2
   //(7) 2 1 2 (8) 1 1 2

   //n = 7
   //(1) 1 1 1 1 1 1 1 (2) 2 1 1 1 1 1 (3) 2 2 1 1 1 (4) 2 2 2 1
   //and other combinations


   //const baseEvenCombinations = n/2 + 1;
   //const baseOddCombinations = ((n-1)/2) + 1;

   //if n is even
   //if (n%2 == 0) {res = (n/2) + 1;}
   //if it's odd, minus one from n and it's the same?
   //if (n%2 != 0) {n--; res = (n/2) + 1;}

    //oh it's counting different combinations...
    //i.e. 2 + 1 isn't 1 + 2

    //let res = 0;

   // if (n = 2) return 2;

    //oh it looks fibonacci
    let fib = [1, 2];
    for (let i = 2; i<n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
   // fib = [1, 2, 3, 4, 5]
    //console.log(fib);
    //res = fib[n-1];
    return fib[n-1];

};
