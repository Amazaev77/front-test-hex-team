import { ILink } from 'src/store/link/types'

export interface StatisticsState {
  error: null | string
  isLoading: boolean
  data: ILink[]
  page: number
}
