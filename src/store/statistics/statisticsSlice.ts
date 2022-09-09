import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { sendLongLink } from 'src/store/link/linkActions'
import { fetchStatistics } from 'src/store/statistics/statisticsActions'
import { logout } from 'src/store/user/userActions'

import { StatisticsState } from './types'

const initialState: StatisticsState = {
  error: null,
  isLoading: false,
  data: [],
  page: 1,
}

export const statisticsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addCount: (state, action: PayloadAction<number>) => {
      state.data = state.data.map((el) => {
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
        state.data = action.payload
        state.isLoading = false
        state.error = null
        // if (action.payload.length === 0) {
        //   state.page = 1
        // }
      })
      .addCase(fetchStatistics.rejected, (state, action) => {
        state.error = action.payload as string
        state.data = []
        state.isLoading = false
        state.page = 1
      })
      .addCase(sendLongLink.fulfilled, (state, action) => {
        if (state.data.length === 10) {
          state.data.shift()
        }
        state.data.unshift(action.payload)
      })
      .addCase(logout.fulfilled, (state) => {
        state.error = null
        state.isLoading = false
        state.data = []
        state.page = 1
      })
  },
})

export const { reducer: statisticsReducer } = statisticsSlice
export const { addCount, toNextPage, toPrevPage } = statisticsSlice.actions
