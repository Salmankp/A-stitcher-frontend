import { ATCServiceStore } from '../../store/mobx'
import API_CALL from '../api'
import { TloginInput } from './model'

const register = async (input: TloginInput): Promise<any> => {
  const result = await API_CALL('post', 'users/signup', {}, input)
  if (result?.data?.data?.token !== false) {
    ATCServiceStore.processAuthData({ ...result.data.data })
  }
  return result
}

export { register }
