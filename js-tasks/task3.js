function rememberResult(initial) {
  let memo = null;
  return function (cb) {
    const val = cb(memo || initial);
    memo = val;
    return val;
  };
}

function callMaxTimes(num, cb) {
  let calls = 0;
  return function () {
    if (calls === num) return console.log('Number of max calls was exeeded');
    calls += 1;
    return cb();
  };
}

function partial(cb, message) {
  return function (toWhom) {
    return cb(message, toWhom);
  };
}

function curry(fn) {
  let calls = 0;
  const curryArr = [];
  function functionSumm(num) {
    curryArr.push(num);
    calls += 1;
    if (calls === fn.length) return fn(...curryArr);
    return functionSumm;
  }
  return functionSumm;
}

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

module.exports = {
  rememberResult,
  callMaxTimes,
  partial,
  curry,
  debounce,
  memoize,
};
