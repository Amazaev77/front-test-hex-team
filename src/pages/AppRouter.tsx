import { FC } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from 'src/components/layout/Layout'
import RequireAuth from 'src/hoc/RequireAuth'
import HomePage from 'src/pages/home/HomePage'
import LoginPage from 'src/pages/login/LoginPage'
import RegisterPage from 'src/pages/register/RegisterPage'

const AppRouter: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route
            index
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
