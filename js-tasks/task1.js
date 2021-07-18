function summ() {
  return Object.values(arguments).reduce(
    (acc, next) =>
      typeof next !== 'boolean' && !isNaN(+next) ? acc + +next : acc,
    0,
  );
}

console.log(summ('30', 1, 2, 3, [], true));

function getRandomNumber() {
  return Math.random();
}

function getTen() {
  return 10;
}

function getTenString() {
  return '10';
}

function summAdvanced() {
  return Object.values(arguments).reduce((acc, next) => {
    if (typeof next !== 'boolean' && !isNaN(+next)) {
      return acc + +next;
    }

    if (typeof next === 'function' && !isNaN(+next())) {
      return acc + +next();
    }

    return acc;
  }, 0);
}

console.log(
  summAdvanced('abc', 1, '2', getTen, getTenString, getRandomNumber, true),
);

function isValueExists(a) {
  if (a === null || typeof a === 'undefined') {
    return false;
  }
  return true;
}

console.log(isValueExists());

function callWithFunctionResult(funct1, funct2) {
  return funct1(funct2());
}

console.log(callWithFunctionResult(doubleValue, getFour));
function doubleValue(value) {
  return value * 2;
}

function getFour() {
  return 4;
}

function consoleLog(value) {
  console.log(value);
}

function callWhileStringIsNotEmpty(string, func) {
  if (!string || typeof string === 'number') {
    return
  }
  func(string);
  const tmp = string.slice(0, -1);
  callWhileStringIsNotEmpty(tmp, consoleLog);
}

callWhileStringIsNotEmpty('qwerty', consoleLog);

module.exports = {
  summ,
  isValueExists,
  callWhileStringIsNotEmpty,
  callWithFunctionResult,
  summAdvanced,
};
