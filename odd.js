// returns true if a number is odd. returns false if a number is even.
function isOdd(num) {
  while (num % 2 === 0) {
    return false;
  } 
    return true;
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));