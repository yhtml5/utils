"use strict";
/**
*  reference: https://github.com/lodash/lodash
*  types: ["Array", "Boolean", "Date", "Number", "Object", "RegExp", "String", "Window", "HTMLDocument"]
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUndefined = function (value) { return typeof value === 'undefined'; };
exports.isNull = function (value) { return Object.prototype.toString.call(value) === '[object Null]'; };
exports.isNumber = function (value) { return Object.prototype.toString.call(value) === '[object Number]'; };
exports.isString = function (value) { return Object.prototype.toString.call(value) === '[object String]'; };
exports.isFunction = function (value) { return Object.prototype.toString.call(value) === '[object Function]'; };
exports.isArray = function (value) { return Object.prototype.toString.call(value) === '[object Array]'; };
exports.isArrayEmpty = function (value) { return exports.isArray(value) && value.length === 0; };
exports.isObject = function (value) { return Object.prototype.toString.call(value) === '[object Object]'; };
exports.isObjectEmpty = function (value) { return exports.isObject(value) && Object.keys(value).length === 0; };
