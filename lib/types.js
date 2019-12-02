const isNumber = value => typeof value === 'number';
const isBoolean = value => typeof value === 'boolean';
const isString = value => typeof value === 'string';
const isArray = value => Array.isArray(value) === true;
const isObject = value => typeof value === 'object' && !Array.isArray(value);
const isFunction = value => typeof value === 'function';


const castToNumber = value => {
  if(isNumber(value)) return value;

  const convertedNumber = Number(value);
  if(value === '' || Number.isNaN(convertedNumber)) {
    throw new CastError(Number, value);
  }
  return convertedNumber;
};

const castToString = value => {
  if(isString(value)) {
    return value;
  } else if(isNumber(value) || isFunction(value)) {
    return value.toString();
  } else {
    return JSON.stringify(value);
  }
};

const castToBoolean = value => {
  if(isBoolean(value)) {
    return value;
  } else if(isNumber(value)) {
    return Boolean(Number(value));
  } else  {
    return Boolean(value);
  }
};

class CastError extends Error {
  constructor(Type, value) {
    const type = Type.name;
    super(`Cannot cast >>${value}<< to ${type}`);
    this.type = type;
    this.value = value;
  }
}

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
  isFunction,
  CastError,
  // getCaster,
  castToNumber,
  castToString,
  castToBoolean
};
