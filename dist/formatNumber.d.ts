interface Config {
    number?: number;
    decimals?: number;
    util?: number;
    roundtag?: string;
    decPoint?: string;
    thousandsSep?: string;
}
declare function formatNumber(values: Config): (number: string) => string;
export default formatNumber;
