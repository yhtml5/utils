"use strict";
/*
 *  Enter JavaScript-style regular expression to display
 *  https://regexper.com/
 *  Write and test regular expression
 *  http://www.regexr.com/
 *  https://github.com/chriso/validator.js
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBankCardNum = function (str) { return /^(\d{14}|\d{16}|\d{19})$/.test(str); };
exports.isChinaName = function (str) { return /^[\u4e00-\u9fa5]{1,10}$/.test(str); };
exports.isChinaPhone = function (str) { return /^(13[0-9]|14[5|7]|15[0-9]|18[0-9])\d{8}$/.test(str); };
exports.isEmail = function (str) { return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(str); };
exports.isIdCard = function (str) { return /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/.test(str); };
exports.isNum = function (str) { return /^[0-9]*$/.test(str); };
exports.isNumSixToTwenty = function (str) { return /^[a-zA-Z0-9]\w{5,19}$/.test(str); };
