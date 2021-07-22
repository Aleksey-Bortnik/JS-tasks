function chunk(arr, chunks) {
  if (!Array.isArray(arr) || typeof chunks !== 'number' || chunks < 1) {
    return [];
  }

  const str = arr.join('');
  let i = 0;
  const chunkedArr = arr.map(() => {
    i += chunks;
    return str.slice(i - chunks, i).split('');
  });
  return chunkedArr.filter(el => el.length !== 0);
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

function fromPairs(arr) {
  if (!arr) return {};
  return arr.reduce((acc, next) => {
    const [a, b] = next;
    acc[a] = b;
    return acc;
  }, {});
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
};
