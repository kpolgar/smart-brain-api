/*Intermediate Algorithm Scripting: Sum All Primes

Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/

/*TESTS
sumPrimes(10) should return a number.
Passed
sumPrimes(10) should return 17.
Passed
sumPrimes(977) should return 73156.
Passed*/

function sumPrimes(num) {
  let arr = [];
  for (let i = 2; i <= num; i++) {
    arr.push(i);
  }
  
  let l = arr.length - 1;
  console.log(l);
  //looping through each element in the array backwards
  for (let j = l; j > 0; j--) {
    //checking if arr[j] is divisible by the smaller numbers in the array
    for (let k = arr[j-1]; k > 1; k--) {
      if (arr[j] % (k) == 0) {
        //removing array items that are divisible by numbers in the array
        arr.splice(j, 1);
        k--;
        //leaving the loop as soon as condition is met
        break;
      }  
    }
  }
  //adding the array items
  var sum = arr.reduce((total, amount) => (total + amount));
  console.log(sum);
  return sum;
}

sumPrimes(977);
