describe('Task 1.', () => {
  const task1 = require('./task1.js');
  describe('1 summ', () => {
    it('should calculate sum only for number values and ignore string values', () => {
      const result = task1.summ(1, '2', '3', 5, 'abc');
      const expectedResult = 11;
      expect(result).toEqual(expectedResult);
    });
    it('should calculate sum only for number values and ignore boolean values', () => {
      const result = task1.summ(1, '2', '3', 5, true);
      const expectedResult = 11;
      expect(result).toEqual(expectedResult);
    });
    it('should calculate sum only for number values and ignore functions', () => {
      const result = task1.summ(1, '2', '3', 5, () => {});
      const expectedResult = 11;
      expect(result).toEqual(expectedResult);
    });
  });
  describe('2 summAdvanced', () => {
    it('should calculate advanced sum only for number values', () => {
      const randomNumber = Math.random();
      const getRandomNumber = () => randomNumber;
      const getTen = () => 10;
      const getTenString = () => '10';
      const result = task1.summAdvanced(
        'abc',
        1,
        '2',
        getTen,
        getTenString,
        getRandomNumber,
      );
      const expectedResult = 23 + randomNumber;
      expect(result).toEqual(expectedResult);
    });
    it('should calculate advanced sum only for number values and validate function results', () => {
      const randomNumber = Math.random();
      const getRandomNumber = () => randomNumber;
      const getString = () => 'abc';
      const getFunction = () => () => {};
      const result = task1.summAdvanced(
        'abc',
        1,
        '2',
        getRandomNumber,
        getString,
        getFunction,
      );
      const expectedResult = 3 + randomNumber;
      expect(result).toEqual(expectedResult);
    });
    it('should calculate advanced sum only for number values and ignore boolean values', () => {
      const result = task1.summAdvanced('abc', 1, '2', true);
      const expectedResult = 3;
      expect(result).toEqual(expectedResult);
    });
  });
  describe('3 isValueExists', () => {
    it('should return true for a number', () => {
      const result = task1.isValueExists(1);
      expect(result).toBe(true);
    });
    it('should return true for 0', () => {
      const result = task1.isValueExists(0);
      expect(result).toBe(true);
    });
    it('should return true for a string', () => {
      const result = task1.isValueExists('12');
      expect(result).toBe(true);
    });
    it('should return true for an empty string', () => {
      const result = task1.isValueExists('');
      expect(result).toBe(true);
    });
    it('should return true for false', () => {
      const result = task1.isValueExists('');
      expect(result).toBe(true);
    });
    it('should return false for undefined', () => {
      const result = task1.isValueExists(undefined);
      expect(result).toBe(false);
    });
    it('should return false for null', () => {
      const result = task1.isValueExists(null);
      expect(result).toBe(false);
    });
  });
  describe('4 callWithFunctionResult', () => {
    const doubleValue = value => value * 2;
    const getFour = () => 4;
    it('should calculate sum of results of 2 functions', () => {
      const result = task1.callWithFunctionResult(doubleValue, getFour);
      const expectedResult = 8;
      expect(result).toEqual(expectedResult);
    });
  });
  describe('5 callWhileStringIsNotEmpty', () => {
    let consolelogSpy;
    beforeEach(() => {
      const consoleLog = value => {
        console.log(value);
      };
      consolelogSpy = jasmine.createSpy('consoleLog', consoleLog);
    });
    it('should show log with sub-strings', () => {
      task1.callWhileStringIsNotEmpty('qwerty', consolelogSpy);
      const result = ['qwerty', 'qwert', 'qwer', 'qwe', 'qw', 'q'];
      result.forEach((substr, index) => {
        expect(consolelogSpy.calls.argsFor(index)).toEqual([substr]);
      });
    });
    it('should not call callback if incomit value is a number', () => {
      task1.callWhileStringIsNotEmpty(10, consolelogSpy);
      expect(consolelogSpy).not.toHaveBeenCalled();
    });
    it('should not call callback if incomit value is not defined', () => {
      task1.callWhileStringIsNotEmpty(undefined, consolelogSpy);
      expect(consolelogSpy).not.toHaveBeenCalled();
    });
  });
});
