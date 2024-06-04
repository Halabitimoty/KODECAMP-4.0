function* fibonacci(n, a, b) {
  let cache = {};

  function fib(n) {
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
    if (cache[n] !== undefined) {
      return cache[n];
    }
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  }
  fib(n);

  for (const num in cache) {
    if (num >= a && num <= b) {
      console.log(`${cache[num]}`);
    }
  }
}
const fib = fibonacci(10, 4, 9);

console.log(fib.next().value);

// function* fibonacci(n) {
//   let a = 0;
//   let b = 1;
//   let cache = {};

//   for (let i = 0; i < n; i++) {
//     yield a;
//     if (cache[a] === undefined) {
//       cache[a] = a;
//     }
//     const temp = a;
//     a = b;
//     b = temp + b;
//   }
// }

// const fib = fibonacci(10);

// for (const num of fib) {
//   console.log(num);
// }
