import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'
import { StatisticsService } from 'src/services/StatisticsService'
import { ILink } from 'src/store/link/types'

import { addCount, toNextPage, toPrevPage } from './statisticsSlice'

export const fetchStatistics = createAsyncThunk<
  ILink[],
  { token: string; order?: string; page?: number }
>('fetch/statistics', async ({ token, order, page }, thunkApi) => {
  try {
    const response = await StatisticsService.fetchStatistics(token, order, page)

    toastr.success('Успешно', 'Данные успешно загрузились')

    return response.data
  } catch (err) {
    toastr.error('Ошибка', 'Не удалось загрузить данные')
    return thunkApi.rejectWithValue(err)
  }
})

export { addCount, toNextPage, toPrevPage }
