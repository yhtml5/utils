function setItemCreator(Storage: any) {
  return function setItem(key: string, value: string) {
    const type = Object.prototype.toString.call(value)
    // 数组, 对象等需要序列化
    if ((['[object Object]', '[object Array]']).indexOf(type) >= 0) {
      Storage.setItem(key, JSON.stringify(value))
    } else {
      Storage.setItem(key, value)
    }
  }
}

function getItemCreator(Storage: any) {
  return function getItem(key: string) {
    const result = Storage.getItem(key)
    try {
      return JSON.parse(result)
    } catch (err) {
      return result
    }
  }
}

const setLocalStorage = setItemCreator(window.localStorage)
const getLocalStorage = getItemCreator(window.localStorage)
const setSessionStorage = setItemCreator(window.sessionStorage)
const getSessionStorage = getItemCreator(window.sessionStorage)

export {
  setLocalStorage,
  getLocalStorage,
  setSessionStorage,
  getSessionStorage,
}
