export enum STORAGE_TYPE {
  LOCAL_STORAGE = 'LOCAL_STORAGE',
  SESSION_STORAGE = 'SESSION_STORAGE',
  COOKIE = 'COOKIE'
}

export function setInStorage (
  key: string,
  value: string,
  storageType: STORAGE_TYPE
) {
  switch (storageType) {
    case STORAGE_TYPE.LOCAL_STORAGE:
      setInLocalStorage(key, value)
      break

    case STORAGE_TYPE.SESSION_STORAGE:
      setInSessionStorage(key, value)
      break
    case STORAGE_TYPE.COOKIE:
      setInCookie(key, value)
      break
    default:
      break
  }
}

export function getFromStorage (key: string, storageType: STORAGE_TYPE) {
  switch (storageType) {
    case STORAGE_TYPE.LOCAL_STORAGE:
      return getFromLocalStorage(key)
    case STORAGE_TYPE.SESSION_STORAGE:
      return getFromSessionStorage(key)
    case STORAGE_TYPE.COOKIE:
      return getFromCookie(key)
    default:
      return 0
  }
}

export function removeFromStorage (key: string, storageType: STORAGE_TYPE) {
  switch (storageType) {
    case STORAGE_TYPE.LOCAL_STORAGE:
      removeFromLocalStorage(key)
      break
    case STORAGE_TYPE.SESSION_STORAGE:
      removeFromSessionStorage(key)
      break

    case STORAGE_TYPE.COOKIE:
      removeFromCookie(key)
      break
    default:
      break
  }
}

// LOCAL_STORAGE
function setInLocalStorage (key: string, value: string) {
  localStorage.setItem(key, value)
}
const getFromLocalStorage = (key: string) => {
  const value = localStorage.getItem(key)
  if (value === null) return undefined
  try {
    return value
  } catch {
    return undefined
  }
}
function removeFromLocalStorage (key: string) {
  localStorage.removeItem(key)
}

// SESSION_STORAGE
function setInSessionStorage (key: string, value: string) {
  sessionStorage.setItem(key, value)
}
function getFromSessionStorage (key: string) {
  const value = sessionStorage.getItem(key)
  if (value === null) return undefined
  try {
    return value
  } catch {
    return undefined
  }
}
function removeFromSessionStorage (key: string) {
  sessionStorage.removeItem(key)
}

// COOKIE
function setInCookie (key: string, value: string) {
  document.cookie = 'tagname = test;secure'
  document.cookie = `${key}=${value}`
}

function getFromCookie (key: string) {
  const value = `; ${document.cookie}`
  const parts: string[] = value.split(`; ${key}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift()
}
function removeFromCookie (key: string) {
  document.cookie = `${key}:`
}
