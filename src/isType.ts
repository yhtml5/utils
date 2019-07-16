/**
*  reference: https://github.com/lodash/lodash
*  types: ["Array", "Boolean", "Date", "Number", "Object", "RegExp", "String", "Window", "HTMLDocument"]
*/

export const isUndefined = (value: any) => typeof value === 'undefined'
export const isNull = (value: any) => Object.prototype.toString.call(value) === '[object Null]'
export const isNumber = (value: any) => Object.prototype.toString.call(value) === '[object Number]'
export const isString = (value: any) => Object.prototype.toString.call(value) === '[object String]'
export const isFunction = (value: any) => Object.prototype.toString.call(value) === '[object Function]'
export const isArray = (value: any) => Object.prototype.toString.call(value) === '[object Array]'
export const isArrayEmpty = (value: any) => isArray(value) && value.length === 0
export const isObject = (value: any) => Object.prototype.toString.call(value) === '[object Object]'
export const isObjectEmpty = (value: any) => isObject(value) && Object.keys(value).length === 0
