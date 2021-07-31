describe('Task 3.', () => {
  const task3 = require('./task3.js');
  describe('1 rememberResult', () => {
    it('should return valid values', () => {
      const doubleValue = value => 2 * value;
      const callWithRememberedResult = task3.rememberResult(2);
      expect(callWithRememberedResult(doubleValue)).toEqual(4);
      expect(callWithRememberedResult(doubleValue)).toEqual(8);
      expect(callWithRememberedResult(doubleValue)).toEqual(16);
    });
  });
  describe('2 callMaxTimes', () => {
    it('should be called only max times', () => {
      const consoleLog = () => console.log('abc');
      const consoleLogSpy = jasmine.createSpy('consoleLog', consoleLog);
      const callConsoleLog = task3.callMaxTimes(3, consoleLogSpy);
      callConsoleLog(); // => 'abc'
      expect(consoleLogSpy).toHaveBeenCalledTimes(1);
      callConsoleLog(); // => 'abc'
      expect(consoleLogSpy).toHaveBeenCalledTimes(2);
      callConsoleLog(); // => 'abc'
      expect(consoleLogSpy).toHaveBeenCalledTimes(3);
      callConsoleLog(); // => nothing happens
      expect(consoleLogSpy).toHaveBeenCalledTimes(3);
    });
  });
  describe('3 partial', () => {
    it('should be called with all arguments', () => {
      const greeting = 'Hello';
      const receiver = 'everyone';
      const greet = (greeting, name) => `${greeting} ${name}`;
      const greetSpy = jasmine.createSpy('greet', greet).and.callFake(greet);
      const sayHelloTo = task3.partial(greetSpy, greeting);
      expect(sayHelloTo(receiver)).toEqual(`${greeting} ${receiver}`);
      expect(greetSpy).toHaveBeenCalledWith(greeting, receiver);
    });
  });
  describe('4 curry', () => {
    it('should work for any amout of arguments', () => {
      const sum1 = (a, b, c) => a + b + c;
      const curriedSum1 = task3.curry(sum1);
      expect(curriedSum1(1)(2)(3)).toEqual(6);
      const sum2 = (a, b, c, d, e) => a + b + c + d + e;
      const curriedSum2 = task3.curry(sum2);
      expect(curriedSum2(1)(2)(3)(4)(5)).toEqual(15);
    });
  });
  describe('5 debounce', () => {
    let cosoleLogSpy;
    let dateNow;
    beforeEach(() => {
      cosoleLogSpy = jasmine.createSpy('console.log');
      dateNow = testValue => () => cosoleLogSpy(testValue);
    });
    it('should work for one function call', done => {
      dateNow = testValue => cosoleLogSpy(testValue);
      const testValue = 'test 1';
      task3.debounce(dateNow(testValue), 1000); // => would be called in 1 second
      setTimeout(() => {
        expect(cosoleLogSpy).toHaveBeenCalledTimes(1);
        expect(cosoleLogSpy).toHaveBeenCalledWith(testValue);
        done();
      }, 110);
    });
    it('should work for several function calls', done => {
      dateNow = testValue => () => cosoleLogSpy(testValue);
      const testValue1 = 'test 1';
      task3.debounce(dateNow(testValue1), 100); // => canceled
      const testValue2 = 'test 2';
      task3.debounce(dateNow(testValue2), 150); // => canceled
      const testValue3 = 'test 3';
      task3.debounce(dateNow(testValue3), 170); // => would be called only last, previous would be canceled
      setTimeout(() => {
        expect(cosoleLogSpy).toHaveBeenCalledTimes(1);
        expect(cosoleLogSpy).toHaveBeenCalledWith(testValue3);
        done();
      }, 200);
    });
  });
  describe('6 memoize', () => {
    it('should work for any amout of arguments', () => {
      const sum = (a, b, c) => a + b + c;
      const sumSpy = jasmine.createSpy('sum', sum).and.callFake(sum);
      const memoizedSumm = task3.memoize(sumSpy);
      expect(memoizedSumm(1, 2, 3)).toEqual(6);
      expect(sumSpy).toHaveBeenCalledTimes(1); // => function summ was called, result 6
      expect(memoizedSumm(1, 2, 3)).toEqual(6);
      expect(sumSpy).toHaveBeenCalledTimes(1); // => function summ was NOT called, result 6 was remembered for arguments 1, 2, 3 and returned
      expect(memoizedSumm(4, 2, 3)).toEqual(9);
      expect(sumSpy).toHaveBeenCalledTimes(2); // => function summ was called, result 9
      expect(memoizedSumm(4, 2, 3)).toEqual(9);
      expect(sumSpy).toHaveBeenCalledTimes(2); // => function summ was NOT called, result 9 was remembered for arguments 4, 2, 3 and returned
    });
  });
});
