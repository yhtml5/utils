# Common utils

[![Build Status](https://travis-ci.org/yhtml5/utils.svg?branch=master)](https://travis-ci.org/yhtml5/utils)
[![Coverage Status](https://coveralls.io/repos/github/yhtml5/utils/badge.svg?branch=master)](https://coveralls.io/github/yhtml5/utils?branch=master)

This repository contains common utility functions for front-end development.

## isType

This file exports various functions for type checking. Here are the available functions:

- isUndefined: Checks if the value is undefined.
- isNull: Checks if the value is null.
- isNumber: Checks if the value is a number.
- isString: Checks if the value is a string.
- isSymbol: Checks if the value is a symbol.
- isFunction: Checks if the value is a function.
- isArray: Checks if the value is an array.
- isArrayEmpty: Checks if the array is empty.
- isArrayNotEmpty: Checks if the array is not empty.
- isObject: Checks if the value is an object.
- isObjectEmpty: Checks if the object is empty.

## formatNumber

This file exports a function formatNumber(number: number | string, option: Config) that formats a number according to the specified options. The available options are:

- decimals: How many decimal places to keep, default is 0.
- decPoint: Decimal point symbol, default is '.'.
- roundtag: Rounding parameter, can be 'ceil' (round up), 'floor' (round down), 'round' (round), default is 'round'.
- thousandsSep: Thousands separator symbol, default is an empty string.
- util: How many digits to switch units, default is 10,000.

## formatTime

This file exports a function formatTime(time: Date, format: string) that formats a date object according to the specified format. The format string can include the following placeholders:

- M+: Month (1-12)
- D+: Day of the month (1-31)
- h+: Hour (0-23)
- m+: Minute (0-59)
- s+: Second (0-59)
- q+: Quarter (1-4)
- S: Milliseconds

The format string can also include the placeholder y+ for the year. For example, the format string 'yyyy-MM-dd hh:mm:ss' will format the date as '2022-01-01 12:00:00'.

## validator.ts

This file exports various functions for validating different types of data. Here are the available functions:

- isBankCardNum(str: string): boolean: Checks if the string is a valid bank card number.
- isChinaName(str: string): boolean: Checks if the string is a valid Chinese name.
- isChinaPhone(str: string): boolean: Checks if the string is a valid Chinese phone number.
- isEmail(str: string): boolean: Checks if the string is a valid email address.
- isIdCard(str: string): boolean: Checks if the string is a valid ID card number.
- isNum(str: string): boolean: Checks if the string consists of only numbers.
- isNumSixToTwenty(str: string): boolean: Checks if the string is a valid number with 6 to 20 characters.

Please refer to the code comments for more details on each function.
