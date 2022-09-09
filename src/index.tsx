import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from 'src/App'
import ReduxToastr from 'src/components/ui/redux-toastr/ReduxToastr'
import { store } from 'src/store/store'

import './index.scss'

import 'react-loading-skeleton/dist/skeleton.css'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxToastr />
      <App />
    </Provider>
  </React.StrictMode>,
)
