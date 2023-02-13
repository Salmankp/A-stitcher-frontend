import { ATCServiceStore } from '../../store/mobx'
import API_CALL from '../api'
import { TloginInput } from './model'

const login = async (input: TloginInput): Promise<any> => {
  const result = await API_CALL('post', 'users/login', {}, input)

  if (result?.data?.data?.token !== false) {
    ATCServiceStore.processAuthData({ ...result.data.data })
  }

  return result
}

const logOut = async (): Promise<any> => {
  ATCServiceStore.removeAuthData()
}

export { login, logOut }
