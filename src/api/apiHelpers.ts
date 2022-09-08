import { API_URL } from 'src/api/api_url'
import { itemsCount } from 'src/constants/itemsCount'

type ParamType = 'login' | 'register' | 'squeeze' | 'statistics' | 's'

export const getHeaders = () => ({
  accept: 'application/json',
  'Content-Type': 'application/x-www-form-urlencoded',
})

export const getGrantType = (username: string, password: string) => {
  return `&username=${username}&password=${password}&scope=&client_id=&client_secret=`
}

export const getUrl = (param: ParamType) => {
  return `${API_URL}/${param}`
}

export const getUserParams = (username: string, password: string) => {
  return `?username=${username}&password=${password}`
}

export const getStatisticsParams = (order = 'desc_counter', page = 1) => {
  return `?order=${order}&offset=${page * itemsCount - itemsCount}&limit=${itemsCount}`
}
