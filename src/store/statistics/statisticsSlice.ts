import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { sendLongLink } from 'src/store/link/linkActions'
import { fetchStatistics } from 'src/store/statistics/statisticsActions'

import { StatisticsState } from './types'

const initialState: StatisticsState = {
  error: null,
  isLoading: false,
  statistics: [],
  page: 1,
}

export const statisticsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addCount: (state, action: PayloadAction<number>) => {
      state.statistics = state.statistics.map((el) => {
        return el.id === action.payload ? { ...el, counter: el.counter + 1 } : el
      })
    },
    toNextPage: (state) => {
      state.page = state.page + 1
    },
    toPrevPage: (state) => {
      state.page = state.page - 1
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStatistics.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchStatistics.fulfilled, (state, action) => {
        state.statistics = action.payload
        state.isLoading = false
        state.error = null
      })
      .addCase(fetchStatistics.rejected, (state, action) => {
        state.error = action.payload as string
        state.statistics = []
        state.isLoading = false
      })
      .addCase(sendLongLink.fulfilled, (state, action) => {
        if (state.statistics.length === 10) {
          state.statistics.shift()
        }
        state.statistics.unshift(action.payload)
      })
  },
})

export const { reducer: statisticsReducer } = statisticsSlice
export const { addCount, toNextPage, toPrevPage } = statisticsSlice.actions
