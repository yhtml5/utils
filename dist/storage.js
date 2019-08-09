"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function setItemCreator(Storage) {
    return function setItem(key, value) {
        var type = Object.prototype.toString.call(value);
        // 数组, 对象等需要序列化
        if ((['[object Object]', '[object Array]']).indexOf(type) >= 0) {
            Storage.setItem(key, JSON.stringify(value));
        }
        else {
            Storage.setItem(key, value);
        }
    };
}
function getItemCreator(Storage) {
    return function getItem(key) {
        var result = Storage.getItem(key);
        try {
            return JSON.parse(result);
        }
        catch (err) {
            return result;
        }
    };
}
var setLocalStorage = setItemCreator(window.localStorage);
exports.setLocalStorage = setLocalStorage;
var getLocalStorage = getItemCreator(window.localStorage);
exports.getLocalStorage = getLocalStorage;
var setSessionStorage = setItemCreator(window.sessionStorage);
exports.setSessionStorage = setSessionStorage;
var getSessionStorage = getItemCreator(window.sessionStorage);
exports.getSessionStorage = getSessionStorage;
