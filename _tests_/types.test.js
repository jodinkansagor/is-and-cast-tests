const {
  isNumber,
  isBoolean,
  isString,
  isArray,
  isObject,
  isFunction
  // castToNumber,
  // getCaster
} = require('../lib/types.js');

describe('validator module', () => {
  describe('basic validation', () => {
    it('properly tells if a value is a numbers', () => {
      expect(isNumber(3)).toBeTruthy();
      expect(isNumber('hi')).toBeFalsy();
      expect(isNumber([])).toBeFalsy();
      expect(isNumber({})).toBeFalsy();
      expect(isNumber(() => {})).toBeFalsy();
      expect(isNumber(true)).toBeFalsy();
    });

    it('properly tells if a value is a boolean', () => {
      expect(isBoolean(true)).toBeTruthy();
      expect(isBoolean(false)).toBeTruthy();
      expect(isBoolean(5)).toBeFalsy();
      expect(isBoolean('true')).toBeFalsy();
      expect(isBoolean('hello')).toBeFalsy();
      expect(isBoolean({})).toBeFalsy();
      expect(isBoolean([])).toBeFalsy();
      expect(isBoolean(() => {})).toBeFalsy();
    });

    it('properly tells if a value is a string', () => {
      expect(isString('hello')).toBeTruthy();
      expect(isString('jbj rules')).toBeTruthy();
      expect(isString('true')).toBeTruthy();
      expect(isString('5')).toBeTruthy();      expect(isString(5)).toBeFalsy();
      expect(isString(true)).toBeFalsy();
      expect(isString(false)).toBeFalsy();
      expect(isString({})).toBeFalsy();
      expect(isString([])).toBeFalsy();
      expect(isString(() => {})).toBeFalsy();
    });

    it('properly tells if a value is a array', () => {
      expect(isArray([])).toBeTruthy();
      expect(isArray([1, 2, 3, 4])).toBeTruthy();
      expect(isArray(['jbj', 1, []])).toBeTruthy();
      expect(isArray([[], {}])).toBeTruthy();      expect(isArray(5)).toBeFalsy();
      expect(isArray(true)).toBeFalsy();
      expect(isArray(false)).toBeFalsy();
      expect(isArray({})).toBeFalsy();
      expect(isArray('jbj')).toBeFalsy();
      expect(isArray(() => {})).toBeFalsy();
    });

    it('properly tells if a value is a object', () => {
      expect(isObject({})).toBeTruthy();
      expect(isObject({})).toBeTruthy();
      expect(isObject(['jbj', 1, []])).toBeTruthy();
      expect(isObject([[], {}])).toBeTruthy();      expect(isObject(5)).toBeFalsy();
      expect(isObject(true)).toBeFalsy();
      expect(isObject(false)).toBeFalsy();
      expect(isObject({})).toBeFalsy();
      expect(isObject('jbj')).toBeFalsy();
      expect(isObject(() => {})).toBeFalsy();
    });
    
  });

  // describe('casters', () => {
  //   it('can cast values to a number', () => {
  //     expect(castToNumber(3)).toEqual(3);
  //     expect(castToNumber('3')).toEqual(3);
  //     expect(castToNumber(true)).toEqual(1);
  //     expect(castToNumber(false)).toEqual(0);
  //   });

  //   it('throws if value is not castable to number', () => {
  //     expect(() => castToNumber('hi')).toThrowErrorMatchingSnapshot();
  //     expect(() => castToNumber({})).toThrowErrorMatchingSnapshot();
  //   });
  // });

  // it('can get the right caster', () => {
  //   expect(getCaster(Number)).toEqual(castToNumber);
  //   expect(getCaster(Promise)).toBeNull();
  // });
});
