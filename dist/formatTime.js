"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 时间格式处理
function formatTime(time, format) {
    var o = {
        'M+': time.getMonth() + 1,
        'D+': time.getDate(),
        'h+': time.getHours(),
        'm+': time.getMinutes(),
        's+': time.getSeconds(),
        'q+': Math.floor((time.getMonth() + 3) / 3),
        S: time.getMilliseconds(),
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, ("" + time.getFullYear())
            .substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length === 1
                // @ts-ignore
                ? o[k]
                // @ts-ignore
                : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
}
exports.default = formatTime;
