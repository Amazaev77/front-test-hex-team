import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { toastr } from 'react-redux-toastr'
import { AuthService } from 'src/services/AuthService'
import {
  ILoginPayloadSuccess,
  ILoginResponse,
  IRegisterResponse,
  IUsernamePassword,
} from 'src/store/user/types'

export const register = createAsyncThunk<IRegisterResponse, IUsernamePassword>(
  'auth/register',
  async ({ username, password }, thunkApi) => {
    try {
      const response = await AuthService.register(username, password)
      const data: IRegisterResponse = response.data

      localStorage.setItem('user', JSON.stringify({ username }))
      toastr.success('', 'Регистрация прошла успешно')

      return data
    } catch (err) {
      const errorResponse = (err as AxiosError).response

      return thunkApi.rejectWithValue(errorResponse)
    }
  },
)

export const login = createAsyncThunk<ILoginPayloadSuccess, IUsernamePassword>(
  'auth/login',
  async ({ username, password }, thunkApi) => {
    try {
      const response = await AuthService.login(username, password)
      const data: ILoginResponse = response.data

      localStorage.setItem('token', JSON.stringify(data))
      localStorage.setItem('user', JSON.stringify({ username }))

      toastr.success('', 'Вы успешно авторизовались')

      return { username, token: data }
    } catch (err) {
      toastr.error('Ошибка', 'Ошибка при авторизации')
      const errorResponse = (err as AxiosError).response
      return thunkApi.rejectWithValue(errorResponse)
    }
  },
)

export const logout = createAsyncThunk('auth/logout', async () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
})
