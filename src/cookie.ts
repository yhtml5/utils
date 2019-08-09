function setCookie(name: string, value: string, hour: number) {
  let currentTime = new Date()
  currentTime.setTime(currentTime.getTime() + (hour * 60 * 60 * 1000))
  document.cookie = 'token=null'
  // @ts-ignore
  document.cookie = `${name}=${value};expires=${currentTime.toGMTString()}`
}

const getCookie = (name: string) => {
  return (new RegExp(name, 'g').test(document.cookie))
    ? document.cookie.split(name)[1].split("=")[1].split(";")[0]
    : false
}
const clearCookie = (name: string) => {
  if (name) {
    setCookie(name, '', -1)
  } else {
    const keys = document.cookie.match(/[^ =;]+(?=\=)/g)
    if (keys) {
      keys.forEach((key) => setCookie(key, '', -1))
    }
  }
}

export {
  setCookie,
  getCookie,
  clearCookie
}
