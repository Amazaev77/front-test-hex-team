import { createSlice } from '@reduxjs/toolkit'
import { sendLongLink } from 'src/store/link/linkActions'

import { LinkState } from './types'

const initialState: LinkState = {
  error: null,
  isLoading: false,
  link: null,
}

export const linkSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendLongLink.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(sendLongLink.fulfilled, (state, action) => {
        state.link = action.payload
        state.isLoading = false
      })
      .addCase(sendLongLink.rejected, (state, action) => {
        state.error = action.payload as string
        state.link = null
        state.isLoading = false
      })
  },
})

export const { reducer: linkReducer } = linkSlice
