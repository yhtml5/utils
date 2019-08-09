"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function setCookie(name, value, hour) {
    var currentTime = new Date();
    currentTime.setTime(currentTime.getTime() + (hour * 60 * 60 * 1000));
    document.cookie = 'token=null';
    // @ts-ignore
    document.cookie = name + "=" + value + ";expires=" + currentTime.toGMTString();
}
exports.setCookie = setCookie;
var getCookie = function (name) {
    return (new RegExp(name, 'g').test(document.cookie))
        ? document.cookie.split(name)[1].split("=")[1].split(";")[0]
        : false;
};
exports.getCookie = getCookie;
var clearCookie = function (name) {
    if (name) {
        setCookie(name, '', -1);
    }
    else {
        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
        if (keys) {
            keys.forEach(function (key) { return setCookie(key, '', -1); });
        }
    }
};
exports.clearCookie = clearCookie;
