import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from 'src/hooks/useAuth'

export const useRedirectToHome = () => {
  const { isAuth } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth) {
      navigate('/')
    }
  }, [isAuth, navigate])
}
