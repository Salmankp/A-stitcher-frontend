import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios'
import { ATCServiceStore } from '../../store/mobx'

const BASE_URL =
  process.env.REACT_APP_BACKEND_URL ??
  'https://stitcher.dev.env.atcresearch.co/api/v1'

const API_CALL = async (
  method: 'get' | 'post' | 'put' | 'delete',
  path: string,
  headers?: AxiosRequestHeaders,
  requestBody?: any,
  queryParams?: Record<string, any>
): Promise<any> => {
  const config: AxiosRequestConfig = {
    url: `${BASE_URL}/${path}`,
    method,
    headers: {
      ...ATCServiceStore?.headers,
      ...headers
    },
    data: requestBody,
    params: { ...queryParams }
  }

  return await axios.request(config)
}

export default API_CALL
