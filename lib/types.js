const isNumber = value => typeof value === 'number';
const isBoolean = value => typeof value === 'boolean';
const isString = value => typeof value === 'string';
const isArray = value => Array.isArray(value) === true;
const isObject = value => typeof value === 'object';
const isFunction = value => typeof value === 'function';


// const castToNumber = value => {
//   if(isNumber(value)) return value;
//   const number = Number(value);
//   if(isNaN(number)) throw new CastError(Number, value);
//   return number;
// };

// class CastError extends Error {
//   constructor(Type, value) {
//     const type = Type.name;
//     super(`Cannot cast >>${value}<< to ${type}`);
//     this.type = type;
//     this.value = value;
//   }
// }

// const casters = {
//   Number: castToNumber,
// };

// const getCaster = Type => {  
//   return casters[Type.name] || null;
// };

module.exports = {
  isNumber,
  isBoolean,
  isString,
  isArray,
  isObject,
  isFunction
  // CastError,
  // getCaster,
  // castToNumber,
};
