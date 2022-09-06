import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { toastr } from 'react-redux-toastr'
import { LinkService } from 'src/services/LinkService'
import { ILink, ILinkToken } from 'src/store/link/types'

export const sendLongLink = createAsyncThunk<ILink, ILinkToken>(
  'send/link',
  async ({ link, token }, thunkApi) => {
    try {
      const response = await LinkService.sendLongLink(link, token)

      toastr.success('', 'Вы успешно сократили ссылку')

      return response.data
    } catch (err) {
      toastr.error('Ошибка', 'Ошибка при отправке ссылки')
      const errorResponse = (err as AxiosError).response
      return thunkApi.rejectWithValue(errorResponse)
    }
  },
)
