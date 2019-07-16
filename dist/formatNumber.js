"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatNumber(values) {
    var _a = values || {}, _b = _a.decimals, decimals = _b === void 0 ? 0 : _b, _c = _a.util, util = _c === void 0 ? 4 : _c, _d = _a.decPoint, decPoint = _d === void 0 ? '.' : _d, _e = _a.thousandsSep, thousandsSep = _e === void 0 ? '' : _e, _f = _a.roundtag, roundtag = _f === void 0 ? 'round' : _f;
    // if (process.env.NODE_ENV !== 'production') {
    if (Object.prototype.toString.call(decimals) !== '[object Number]') {
        throw "formatNumber's parameter decimals must be a Number, but get " + decimals;
    }
    if (['ceil', 'floor', 'round'].indexOf(roundtag) < 0) {
        throw "formatNumber's parameter roundtag can only be one of the [ceil,floor,round] or be Omitted, but get " + roundtag;
    }
    // }
    return function (number) {
        // let number = JSON.parse(JSON.stringify(value))
        number = (number + '').replace(/[^0-9+-Ee.]/g, '');
        var n = !isFinite(+number) ? 0 : +number;
        var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
        var s = '';
        function toFixedFix(n, prec) {
            var k = Math.pow(10, prec);
            console.log();
            // @ts-ignore
            return '' + parseFloat(Math[roundtag](parseFloat((n * k).toFixed(prec * 2))).toFixed(prec * 2)) / k;
        }
        ;
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
        if (thousandsSep) {
            var re = /(-?\d+)(\d{3})/;
            while (re.test(s[0])) {
                s[0] = s[0].replace(re, "$1" + thousandsSep + "$2");
            }
        }
        if ((s[1] || '').length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1).join('0');
        }
        return s.join(decPoint);
    };
}
exports.default = formatNumber;
