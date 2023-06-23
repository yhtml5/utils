interface Config {
  decimals?: number;      // How many decimal places to keep, default 0
  decPoint?: string;      // Decimal point symbol, default '.'
  roundtag?: string;      // Rounding parameter, [ceil: round up, floor: round down, round: round], default round
  thousandsSep?: string;  // Thousands separator symbol, default none
  util?: number;          // How many digits to switch units, default 10,000
}

function formatNumber(number: number | string, option: Config) {
  const { decimals = 0, util = 4, decPoint = '.', thousandsSep = '', roundtag = 'round', } = option || {}

  // if (process.env.NODE_ENV !== 'production') {
  if (Object.prototype.toString.call(decimals) !== '[object Number]') {
    throw `formatNumber\'s parameter decimals must be a Number, but get ${decimals}`
  }

  if (['ceil', 'floor', 'round'].indexOf(roundtag) < 0) {
    throw `formatNumber\'s parameter roundtag can only be one of the [ceil,floor,round] or be Omitted, but get ${roundtag}`
  }

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

export default formatNumber
