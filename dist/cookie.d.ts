declare function setCookie(name: string, value: string, hour: number): void;
declare const getCookie: (name: string) => string | false;
declare const clearCookie: (name: string) => void;
export { setCookie, getCookie, clearCookie };
