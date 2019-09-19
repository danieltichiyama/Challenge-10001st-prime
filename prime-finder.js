let isPrime = function(num) {
  for (i = 3; i < Math.sqrt(num) + 1; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

module.exports = function(n) {
  let count = 1;
  let number = 3;

  while (count < n) {
    if (isPrime(number)) {
      number += 2;
      count++;
    } else {
      number += 2;
    }
  }

  number -= 2;

  return number;
};
