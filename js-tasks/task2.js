function chunk(arr, chunks) {
  if (!Array.isArray(arr) || typeof chunks !== 'number' || chunks < 1) {
    return [];
  }

  const result = [];
  const container = arr.length;
  for (let i = 0; i < container; i += chunks) {
    result.push(arr.slice(i, i + chunks));
  }
  return result;
}

function difference(array1, array2) {
  if (
    array1 === null ||
    array2 === null ||
    array1.length === 0 ||
    array2.length === 0
  ) {
    return [];
  }

  const difference1 = array1.filter(el => !array2.includes(el));
  const difference2 = array2.filter(el => !array1.includes(el));
  const baseDifference = [difference1, difference2].flat();
  const clearDifference = [...new Set(baseDifference)];
  return clearDifference;
}

function findIndex(array, elem) {
  if (typeof elem === 'function') {
    const userIndex = array.findIndex(elem);
    return userIndex;
  }

  const userIndex = array.indexOf(elem);
  return userIndex;
}

function flattenDeep(array) {
  if (array) return array.flat(Infinity);
  return [];
}

// function fromPairsFirst(arr) {
//   if (!arr) return {};
//   return arr.reduce((acc, next) => {
//     const [a, b] = next;
//     acc[a] = b;
//     return acc;
//   }, {});
// }

function fromPairs(arr) {
  if (!arr) return {};

  return Object.fromEntries(arr);
}

function uniq(arr) {
  if (!arr) {
    return [];
  }
  return [...new Set(arr)];
}

function every(arr, callback) {
  if (!arr || !callback || !arr.length) return false;
  return arr.every(callback);
}

function find(arr, callback) {
  if (!arr || !callback || !arr.length) return null;
  return arr.find(callback);
}

function groupBy(arr, cb) {
  if (!arr) return null;
  return arr.reduce((acc, next) => {
    if (!acc[cb(next)]) {
      acc[cb(next)] = [];
    }
    acc[cb(next)].push(next);

    return acc;
  }, {});
}

function isEqual(a, b) {
  if (a === b) return true;

  if (
    a === null ||
    typeof a !== 'object' ||
    b === null ||
    typeof b !== 'object'
  )
    return false;

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (let i = 0; i < keysA.length; i += 1) {
    if (!keysB.includes(keysA[i]) || !isEqual(a[keysA[i]], b[keysA[i]]))
      return false;
  }

  return true;
}

module.exports = {
  chunk,
  difference,
  findIndex,
  flattenDeep,
  fromPairs,
  uniq,
  every,
  find,
  groupBy,
  isEqual,
};
