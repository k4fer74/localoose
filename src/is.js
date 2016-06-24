export const isArray = variable => {
    return Array.isArray(variable);
}

export const isNumber = variable => {
    return typeof variable == "number";
}

export const isBoolean = variable => {
    return typeof variable == "boolean";
}

export const isObject = variable => {
    return typeof variable == "object";
}

export const isString = variable => {
    return typeof variable == "string";
}

export const isUndefined = variable => {
    return typeof variable == "undefined";
}

export const isNull = variable => {
    return variable === null;
}

export const isFunction = variable => {
    return typeof variable == "function";
}

export const isEmpty = variable => {
    return variable == "";
}

export const is = {
    Array: isArray,
    Number: isNumber,
    Boolean: isBoolean,
    Object: isObject,
    String: isString,
    Undefined: isUndefined,
    Null: isNull,
    Function: isFunction,
    Empty: isEmpty
};
