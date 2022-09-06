import axios from 'axios'
import { getGrantType, getHeaders, getUrl, getUserParams } from 'src/api/apiHelpers'
import { ILoginResponse, IRegisterResponse } from 'src/store/user/types'

export const AuthService = {
  async register(username: string, password: string) {
    const url = getUrl('register')
    const params = getUserParams(username, password)

    return await axios.post<IRegisterResponse>(
      url + params,
      {},
      { headers: getHeaders() },
    )
  },

  async login(username: string, password: string) {
    const url = getUrl('login')

    return await axios.post<ILoginResponse>(
      url,
      {
        grant_type: getGrantType(username, password),
      },
      {
        headers: getHeaders(),
      },
    )
  },
}
