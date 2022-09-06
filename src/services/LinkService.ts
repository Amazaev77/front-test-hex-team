import axios from 'axios'
import { getHeaders, getUrl } from 'src/api/apiHelpers'
import { ILink } from 'src/store/link/types'

export const LinkService = {
  async sendLongLink(longUrl: string, token: string) {
    const url = getUrl('squeeze')
    const params = `?link=${longUrl}`

    return await axios.post<ILink>(
      url + params,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          ...getHeaders(),
        },
      },
    )
  },
}
