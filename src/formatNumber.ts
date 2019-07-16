interface Config {
  number?: number;        //  要格式化的数字
  decimals?: number;      // 保留几位小数, 默认 0
  util?: number;          // 多少位开启换单位, 默认 万
  roundtag?: string;      // 舍入参数, [ceil: 向上取整, floor: 向下取整, round: 四舍五入], 默认 round
  decPoint?: string;      // 小数点符号, 默认 '.'
  thousandsSep?: string;  // 千分位符号, 默认 无
}

function formatNumber(values: Config) {
  const { decimals = 0, util = 4, decPoint = '.', thousandsSep = '', roundtag = 'round', } = values || {}

  // if (process.env.NODE_ENV !== 'production') {
  if (Object.prototype.toString.call(decimals) !== '[object Number]') {
    throw `formatNumber\'s parameter decimals must be a Number, but get ${decimals}`
  }

  if (['ceil', 'floor', 'round'].indexOf(roundtag) < 0) {
    throw `formatNumber\'s parameter roundtag can only be one of the [ceil,floor,round] or be Omitted, but get ${roundtag}`
  }
  // }

  return (number: string) => {
    // let number = JSON.parse(JSON.stringify(value))
    number = (number + '').replace(/[^0-9+-Ee.]/g, '')
    const n = !isFinite(+number) ? 0 : +number
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
    let s: string | string[] = ''

    function toFixedFix(n: number, prec: number) {
      const k = Math.pow(10, prec);
      console.log();
      // @ts-ignore
      return '' + parseFloat(Math[roundtag](parseFloat((n * k).toFixed(prec * 2))).toFixed(prec * 2)) / k;
    };
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (thousandsSep) {
      const re = /(-?\d+)(\d{3})/;
      while (re.test(s[0])) {
        s[0] = s[0].replace(re, "$1" + thousandsSep + "$2");
      }
    }
    if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(decPoint);
  }
}

export default formatNumber
