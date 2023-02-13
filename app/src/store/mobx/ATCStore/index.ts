import {
  action,
  makeAutoObservable,
  observable,
  // runInAction,
  configure
} from 'mobx'
import axios, { AxiosRequestHeaders } from 'axios'
import {
  getFromStorage,
  removeFromStorage,
  setInStorage,
  STORAGE_TYPE
} from '../../../services/storageService'

const BASE_URL =
  process.env.REACT_APP_BACKEND_URL ??
  'https://stitcher.dev.env.atcresearch.co/api/v1'

export class ATC_Store {
  @observable
    headers: AxiosRequestHeaders = { 'Content-Type': 'application/json' }

  accessToken: string | null | undefined = undefined
  authenticated = false
  _user: any = undefined
  initialLoading = true

  constructor () {
    makeAutoObservable(this)
    void this.setAuth()
  }

  @action getAccessToken = async (userId: any, refreshToken: any) => {
    const config = {
      url: `${BASE_URL}/users/refreshToken`,
      method: 'POST',
      headers: this.headers,
      data: { user_id: userId, refresh_token: refreshToken }
    }

    return await axios.request(config)
  }

  @action setAuth = async () => {
    const userId = getFromStorage('user_id', STORAGE_TYPE.LOCAL_STORAGE)
    const refreshToken = getFromStorage(
      'refresh_token',
      STORAGE_TYPE.LOCAL_STORAGE
    )

    if (userId && refreshToken) {
      try {
        const res = await this.getAccessToken(userId, refreshToken)
        const { token, user } = res.data
        this.accessToken = token
        this._user = user
        this.headers = {
          ...this.headers,
          Authorization: `${token as string}`
        }
        this.authenticated = true
      } catch (error) {}
    }
    this.initialLoading = false
  }

  @action processAuthData = (input: {
    user: any
    token: string
    refreshToken: string
  }) => {
    const { user, token, refreshToken } = input

    if (refreshToken) {
      setInStorage('refresh_token', refreshToken, STORAGE_TYPE.LOCAL_STORAGE)
    }
    this._user = user
    if (user?.id) setInStorage('user_id', user?.id, STORAGE_TYPE.LOCAL_STORAGE)
    this.accessToken = token
    this.headers = {
      ...this.headers,
      Authorization: `${token}`
    }

    this.authenticated = true

    return input
  }

  @action removeAuthData = () => {
    removeFromStorage('refresh_token', STORAGE_TYPE.LOCAL_STORAGE)
    removeFromStorage('user_id', STORAGE_TYPE.LOCAL_STORAGE)
    this.accessToken = null
    this.headers = {
      ...this.headers,
      Authorization: ''
    }
    this.authenticated = false
  }
}

configure({
  enforceActions: 'never'
})

const ATCServiceStore = new ATC_Store()

export default ATCServiceStore
