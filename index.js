const { isNumber, isString, isBoolean, isArray, isObject, isFunction } = require('./lib/types.js');

console.log(isNumber('3'));
console.log(isString('hi'));
console.log(isBoolean(true));
console.log(isArray([3, 2]));
console.log(isObject({ name: 'JBJ', age: 41 }));
console.log(isFunction(() => {}));

