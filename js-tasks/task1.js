function summ() {
  if (!Object.values(arguments).length) {
    return null;
  }

  return Object.values(arguments).reduce(
    (acc, next) =>
      typeof next !== 'boolean' && !Number.isNaN(+next) ? acc + +next : acc,
    0,
  );
}

function summAdvanced() {
  if (!Object.values(arguments).length) {
    return null;
  }

  return Object.values(arguments).reduce((acc, next) => {
    if (typeof next !== 'boolean' && !Number.isNaN(+next)) {
      return acc + +next;
    }

    if (typeof next === 'function' && !Number.isNaN(+next())) {
      return acc + +next();
    }

    return acc;
  }, 0);
}

function isValueExists(a) {
  if (a === undefined || a === null) {
    return false;
  }

  return true;
}

function callWithFunctionResult(funct1, funct2) {
  if (!funct1 || !funct2) {
    return null;
  }

  return funct1(funct2());
}

function callWhileStringIsNotEmpty(string, func) {
  if (!string || typeof string === 'number' || !func) {
    return;
  }

  func(string);
  const tmp = string.slice(0, -1);
  callWhileStringIsNotEmpty(tmp, func);
}

module.exports = {
  summ,
  isValueExists,
  callWhileStringIsNotEmpty,
  callWithFunctionResult,
  summAdvanced,
  };
