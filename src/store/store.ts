import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { reducer as toastrReducer } from 'react-redux-toastr'

import { linkReducer } from './link/linkSlice'
import { statisticsReducer } from './statistics/statisticsSlice'
import { userReducer } from './user/userSlice'

const rootReducer = combineReducers({
  user: userReducer,
  link: linkReducer,
  statistics: statisticsReducer,
  toastr: toastrReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export const store = setupStore()

setupListeners(store.dispatch)
