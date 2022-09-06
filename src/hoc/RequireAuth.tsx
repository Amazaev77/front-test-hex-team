import { FC, ReactElement } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from 'src/hooks/useAuth'

interface RequireAuthProps {
  children: ReactElement
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const location = useLocation()
  const { isAuth } = useAuth()

  if (!isAuth) {
    return <Navigate to='/login' state={{ from: location }} />
  }

  return children
}

export default RequireAuth
