// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for(index = 1; index <= n; index += 1) {
    if(index % 3 === 0 || index % 5 === 0) {
      fizzBuzz2(index);
    } else {
      console.log(index);
    }
  }
}

const fizzBuzz2 = (n) => {
  switch(true){
    case ((n % 3 === 0) && (n % 5 === 0)):
      console.log('fizzbuzz');
      break;
    case (n % 3 === 0):
      console.log('fizz');
      break;
    case (n % 5 === 0):
      console.log('buzz');
      break;
  }
}

module.exports = fizzBuzz;
