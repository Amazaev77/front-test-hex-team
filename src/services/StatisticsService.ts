import axios from 'axios'
import { getHeaders, getStatisticsParams, getUrl } from 'src/api/apiHelpers'
import { ILink } from 'src/store/link/types'

export const StatisticsService = {
  async fetchStatistics(token: string, order?: string, page?: number) {
    const url = getUrl('statistics')
    const params = getStatisticsParams(order, page)

    return await axios.get<ILink[]>(url + params, {
      headers: {
        Authorization: `Bearer ${token}`,
        ...getHeaders(),
      },
    })
  },
}
