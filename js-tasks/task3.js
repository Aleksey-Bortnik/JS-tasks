/* Task 1 */
function rememberResult(initial) {
  let memo = null;
  return function (cb) {
    const val = cb(memo || initial);
    memo = val;
    return val;
  };
}

// // Expected result
// function doubleValue(value) {
//   return 2 * value;
// }

// const callWithRememberedResult = rememberResult(2);
// callWithRememberedResult(doubleValue); // => 4
// callWithRememberedResult(doubleValue); // => 8
// callWithRememberedResult(doubleValue); // => 16

/* Task 2 */
function callMaxTimes(num, cb) {
  let calls = 0;
  return function () {
    if (calls === num) return console.log('Number of max calls was exeeded');
    calls += 1;
    return cb();
  };
}

// // Expected result
// function consoleLog() {
//   console.log('abc');
// }

// const callConsoleLog = callMaxTimes(3, consoleLog);
// callConsoleLog(); // => 'abc'
// callConsoleLog(); // => 'abc'
// callConsoleLog(); // => 'abc'
// callConsoleLog(); // => nothing happens

/* Task 3 */
function partial(cb, message) {
  return function (toWhom) {
    return cb(message, toWhom);
  };
}

// // Expected result
// function greet(greeting, name) {
//   return `${greeting} ${name}`;
// }

// const sayHelloTo = partial(greet, 'Hello');
// sayHelloTo('everyone'); // => 'Hello everyone'

/* Task 4 */
function curry(fn) {
  let calls = 0;
  const curryArr = [];
  function functionSumm(num) {
    curryArr.push(num);
    calls += 1;
    if (calls === fn.length) return fn.apply(this, curryArr);
    return functionSumm;
  }
  return functionSumm;
}

// // Expected result
// function summ1(a, b, c) {
//   return a + b + c;
// }

// const curriedSumm1 = curry(summ1);
// curriedSumm1(1)(2)(3); // => 6

// function summ2(a, b, c, d, e) {
//   return a + b + c + d + e;
// }
// const curriedSumm2 = curry(summ2);
// curriedSumm2(1)(2)(3)(4)(5); // => 15

/* Task 5 */
function debounce(func, timeOut) {
  if (func === undefined) {
    return null;
  }

  if (debounce.timerId) {
    clearTimeout(debounce.timerId);
  }

  debounce.timerId = setTimeout(func, timeOut);
  return debounce.timerId;
}

// // Expected result
// function dateNow() {
//   console.log(Date.now());
// }
// // First case
// debounce(dateNow, 1000); // => would be called in 1 second
// ...

// Second case
// debounce(dateNow, 100); // => canceled
// debounce(dateNow, 150); // => canceled
// debounce(dateNow, 170); // => would be called only last, previous would be canceled

/* Task 6 */
function memoize(fn) {
  const cache = {};
  return (...args) => {
    const key = args.sort().join('');
    if (cache[key]) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// // Expected result
// function summ(a, b, c) {
//   return a + b + c;
// }

// const memoizedSumm = memoize(summ);

// memoizedSumm(1, 2, 3); // => function summ was called, result 6
// memoizedSumm(1, 2, 3); // => function summ was NOT called, result 6 was remembered for arguments 1, 2, 3 and returned
// memoizedSumm(4, 2, 3); // => function summ was called, result 9
// memoizedSumm(4, 2, 3); // => function summ was NOT called, result 9 was remembered for arguments 4, 2, 3 and returned

module.exports = {
  rememberResult,
  callMaxTimes,
  partial,
  curry,
  debounce,
  memoize,
};
