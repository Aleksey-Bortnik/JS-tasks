describe('Task 2.', () => {
  const task2 = require('./task2.js');
  describe('1 chunk', () => {
    let testArray;
    beforeEach(() => {
      testArray = ['a', 'b', 'c', 'd'];
    });
    it('should form array into chunks by 2 elements', () => {
      const expectedResult = [
        ['a', 'b'],
        ['c', 'd'],
      ];
      expect(task2.chunk(testArray, 2)).toEqual(expectedResult);
    });
    it('should form array into chunks by 3 elements', () => {
      const expectedResult = [['a', 'b', 'c'], ['d']];
      expect(task2.chunk(testArray, 3)).toEqual(expectedResult);
    });
    it('should return empty array if argument is an empty array', () => {
      expect(task2.chunk([], 3)).toEqual([]);
    });
    it('should return empty array if argument is invalid', () => {
      expect(task2.chunk(null, 3)).toEqual([]);
    });
  });
  describe('2 difference', () => {
    it('should find difference between 2 arrays', () => {
      const result = task2.difference([2, 1], [2, 3, 4]);
      const expectedResult = [1, 3, 4];
      expect(result).toEqual(expectedResult);
    });
    it('should retun empty array if arguments are empty arrays', () => {
      const result = task2.difference([], []);
      const expectedResult = [];
      expect(result).toEqual(expectedResult);
    });
    it('should retun empty array if first argument is invalid', () => {
      const result = task2.difference(null, [2, 3, 4]);
      const expectedResult = [];
      expect(result).toEqual(expectedResult);
    });
    it('should retun empty array if second argument is invalid', () => {
      const result = task2.difference([2, 1], null);
      const expectedResult = [];
      expect(result).toEqual(expectedResult);
    });
  });
  describe('3 findIndex', () => {
    let numbers;
    let array;
    let users;
    beforeEach(() => {
      numbers = [3, 5, 1, 6, 7];
      array = ['3', '5', '1', '6', '7'];
      users = [{ name: 'User1' }, { name: 'User2' }, { name: 'User3' }];
    });
    it('should find a number in numbers array', () => {
      const result = task2.findIndex(numbers, 1);
      const expectedResult = 2;
      expect(result).toEqual(expectedResult);
    });
    it('should not find a number in numbers array and return -1', () => {
      const result = task2.findIndex(numbers, 8);
      const expectedResult = -1;
      expect(result).toEqual(expectedResult);
    });
    it('should find a string in strings array', () => {
      const result = task2.findIndex(array, '1');
      const expectedResult = 2;
      expect(result).toEqual(expectedResult);
    });
    it('should not find a string in strings array and return -1', () => {
      const result = task2.findIndex(array, '8');
      const expectedResult = -1;
      expect(result).toEqual(expectedResult);
    });
    it('should find an object in objects array', () => {
      const filter = user => user.name === 'User2';
      const result = task2.findIndex(users, filter);
      const expectedResult = 1;
      expect(result).toEqual(expectedResult);
    });
    it('should not find an object in objects array and return -1', () => {
      const filter = user => user.name === 'User32';
      const result = task2.findIndex(users, filter);
      const expectedResult = -1;
      expect(result).toEqual(expectedResult);
    });
  });
  describe('4 flattenDeep', () => {
    it('should flatted nested arrats', () => {
      const result = task2.flattenDeep([1, [2, [3, [4]], 5]]);
      const expectedResult = [1, 2, 3, 4, 5];
      expect(result).toEqual(expectedResult);
    });
    it('should return empty array if argument is an empty array', () => {
      const result = task2.flattenDeep([]);
      const expectedResult = [];
      expect(result).toEqual(expectedResult);
    });
    it('should return empty array if argument is invalid', () => {
      const result = task2.flattenDeep(null);
      const expectedResult = [];
      expect(result).toEqual(expectedResult);
    });
  });
  describe('5 fromPairs', () => {
    it('should build an object from an array', () => {
      const result = task2.fromPairs([
        ['a', 1],
        ['b', 2],
      ]);
      const expectedResult = {
        a: 1,
        b: 2,
      };
      expect(result).toEqual(expectedResult);
    });
    it('should return empty array if argument is an empty array', () => {
      const result = task2.fromPairs([]);
      const expectedResult = {};
      expect(result).toEqual(expectedResult);
    });
    it('should return empty array if argument is invalid', () => {
      const result = task2.fromPairs(null);
      const expectedResult = {};
      expect(result).toEqual(expectedResult);
    });
  });
  describe('6 uniq', () => {
    it('should return an array of unique numbers', () => {
      const result = task2.uniq([2, 1, 2, 5, 6, 5, 7]);
      const expectedResult = [2, 1, 5, 6, 7];
      expect(result).toEqual(expectedResult);
    });
    it('should return an array of unique strings', () => {
      const result = task2.uniq(['2', '1', '2', '5', '6', '5', '7']);
      const expectedResult = ['2', '1', '5', '6', '7'];
      expect(result).toEqual(expectedResult);
    });
    it('should return an empty array if argument is an empty array', () => {
      const result = task2.uniq([]);
      const expectedResult = [];
      expect(result).toEqual(expectedResult);
    });
    it('should return an empty array if argument is invalid', () => {
      const result = task2.uniq(null);
      const expectedResult = [];
      expect(result).toEqual(expectedResult);
    });
  });
  describe('7 every', () => {
    let users;
    beforeEach(() => {
      users = [
        { name: 'User1', age: 22 },
        { name: 'User2', age: 22 },
        { name: 'User3', age: 23 },
      ];
    });
    it('should return false if every user has age of 22', () => {
      const result = task2.every(users, user => user.age === 22);
      expect(result).toBeFalse();
    });
    it('should return true if every user has age more then 10', () => {
      const result = task2.every(users, user => user.age > 20);
      expect(result).toBeTrue();
    });
    it('should return false if first argument is an empty array', () => {
      const result = task2.every([], user => user.age > 20);
      expect(result).toBeFalse();
    });
    it('should return false if second argument is not a function', () => {
      const result = task2.every([], null);
      expect(result).toBeFalse();
    });
  });
  describe('8 find', () => {
    let numbers;
    let users;
    beforeEach(() => {
      numbers = [1, 2, 3, 4, 5];
      users = [
        { name: 'User1', age: 22 },
        { name: 'User2', age: 22 },
        { name: 'User3', age: 23 },
      ];
    });
    it('should find an object by a filter', () => {
      const result = task2.find(users, user => user.age === 23);
      const expectedResult = { name: 'User3', age: 23 };
      expect(result).toEqual(expectedResult);
    });
    it('should find a number by a filter', () => {
      const result = task2.find(numbers, number => number > 2);
      const expectedResult = 3;
      expect(result).toEqual(expectedResult);
    });
    it('should return null if first argument is an empty array', () => {
      const result = task2.find([], user => user.age > 20);
      expect(result).toBeNull();
    });
    it('should return null if second argument is not a function', () => {
      const result = task2.find([], null);
      expect(result).toBeNull();
    });
  });
  describe('9 groupBy', () => {
    let array;
    beforeEach(() => {
      array = ['one', 'two', 'three', 'four'];
    });
    it('should group by length', () => {
      const result = task2.groupBy(array, element => element.length);
      const expectedResult = {
        3: ['one', 'two'],
        4: ['four'],
        5: ['three'],
      };
      expect(result).toEqual(expectedResult);
    });
    it('should group by value', () => {
      const result = task2.groupBy(array, element => element);
      const expectedResult = {
        one: ['one'],
        two: ['two'],
        three: ['three'],
        four: ['four'],
      };
      expect(result).toEqual(expectedResult);
    });
    it('should retunr an empty object if array is empty', () => {
      const result = task2.groupBy([], element => element.length);
      const expectedResult = {};
      expect(result).toEqual(expectedResult);
    });
    it('should retunr an empty object if array if first argulemnt is not an array', () => {
      const result = task2.groupBy(null, element => element.length);
      const expectedResult = {};
      expect(result).toEqual(expectedResult);
    });
    it('should retunr an empty object if array if second argulemnt is not a function', () => {
      const result = task2.groupBy(array, null);
      const expectedResult = {};
      expect(result).toEqual(expectedResult);
    });
  });
  describe('10 isEqual', () => {
    let object1;
    let object2;
    let object3;
    beforeEach(() => {
      object1 = {
        a: 1,
        b: { c: 3, d: { e: 5 } },
      };
      object2 = {
        a: 1,
        b: { d: { e: 5 }, c: 3 },
      };
      object3 = {
        b: { d: { e: 5 }, c: 2 },
        a: 1,
      };
    });
    it('should return true for equal objects', () => {
      const result = task2.isEqual(
        Object.assign({}, object1),
        Object.assign({}, object1),
      );
      expect(result).toBeTrue();
    });
    it('should return false for non equal objects', () => {
      const result = task2.isEqual(
        Object.assign({}, object1),
        Object.assign({}, object3),
      );
      expect(result).toBeFalse();
    });
    it("should return true for equal objects (properties arn't sorted)", () => {
      const result = task2.isEqual(
        Object.assign({}, object1),
        Object.assign({}, object2),
      );
      expect(result).toBeTrue();
    });
    it('should return false is first argument is not an object', () => {
      const result = task2.isEqual(null, Object.assign({}, object2));
      expect(result).toBeFalse();
    });
    it('should return false is second argument is not an object', () => {
      const result = task2.isEqual(Object.assign({}, object1), null);
      expect(result).toBeFalse();
    });
  });
});
