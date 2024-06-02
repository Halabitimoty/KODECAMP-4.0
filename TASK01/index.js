// using generators to create a sequence that calculates Fibonacci numbers on demand

/**
 *
 * @param {number} n
 */

function* fibonacciGenerator(n) {
  let first_num = 0,
    second_num = 1,
    temp = 0;

  for (let i = 0; i < n; i++) {
    yield second_num;

    first_num = second_num;
    second_num = first_num + second_num;
    temp = first_num;
  }
}

const fib = fibonacciGenerator(5);

for (let i = 0; i < 5; i++) {
  console.log(fib.next());
}

// Using closure  to store the state of the sequence (previous two numbers).

/**
 *
 * @param {number} n
 * @returns
 */

function fibonacciClosure(n) {
  let first_num = 0,
    second_num = 1;
  return function () {
    let temp = first_num;
    first_num = second_num;
    second_num = first_num + first_num;
    return second_num;
  };
}

const fib2 = fibonacciClosure(5);
for (let i = 0; i < 5; i++) {
  console.log(fib2());
}

// implementing a cache within the closure to store previously calculated Fibonacci numbers.

function fibonacciCaching() {
  const cache = {};

  function fib(n) {
    if (n in cache) {
      return cache[n];
    }

    if (n <= 1) {
      return n;
    }
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  }

  return fib;
}

const fib3 = fibonacciCaching();
const result = fib3(5);
console.log(result);

// Modify the generator function to accept a starting and ending index as arguments

/**
 *
 * @param {number} start
 * @param {number} end
 */

function* fibonacciGeneratorModify(start, end) {
  let first_num = start,
    second_num = 1,
    temp = 0;

  for (let i = 0; i < end; i++) {
    yield second_num;

    first_num = second_num;
    second_num = first_num + second_num;
    temp = first_num;
  }
}

const fib4 = fibonacciGeneratorModify(5, 10);

for (let i = 0; i < 10; i++) {
  console.log(fib4.next());
}
