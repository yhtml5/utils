/**
*  reference: https://github.com/lodash/lodash
*  types: ["Array", "Boolean", "Date", "Number", "Object", "RegExp", "String", "Window", "HTMLDocument"]
*/

export const isUndefined = (value: any): boolean => typeof value === 'undefined'
export const isNull = (value: any): boolean => Object.prototype.toString.call(value) === '[object Null]'
export const isNumber = (value: any): boolean => Object.prototype.toString.call(value) === '[object Number]'
export const isString = (value: any): boolean => Object.prototype.toString.call(value) === '[object String]'
export const isSymbol = (value: any): boolean => Object.prototype.toString.call(value) === '[object Symbol]'

export const isFunction = (value: any): boolean => Object.prototype.toString.call(value) === '[object Function]'
export const isArray = (value: any): boolean => Object.prototype.toString.call(value) === '[object Array]'
export const isArrayEmpty = (value: any): boolean => isArray(value) && value.length === 0
export const isArrayNotEmpty = (value: any): boolean => isArray(value) && value.length > 0
export const isObject = (value: any): boolean => Object.prototype.toString.call(value) === '[object Object]'
export const isObjectEmpty = (value: any): boolean => isObject(value) && Object.keys(value).length === 0
