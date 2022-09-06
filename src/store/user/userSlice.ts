import { createSlice } from '@reduxjs/toolkit'
import { login, logout, register } from 'src/store/user/userActions'

import { IErrorResponse, UserState } from './types'

const initialState: UserState = {
  token: JSON.parse(localStorage.getItem('token') as string),
  error: null,
  isLoading: false,
  user: JSON.parse(localStorage.getItem('user') as string),
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null
      state.error = null
      state.isLoading = false
      state.user = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload as IErrorResponse
        state.isLoading = false
      })
      .addCase(login.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token
        state.isLoading = false
        state.error = null
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload as IErrorResponse
        state.isLoading = false
      })
      .addCase(logout.fulfilled, (state) => {
        state.token = null
        state.error = null
        state.isLoading = false
        state.user = null
      })
  },
})

export const { reducer: userReducer } = userSlice
