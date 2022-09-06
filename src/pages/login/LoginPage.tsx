import { FC } from 'react'
import LoginForm from 'src/components/ui/form/LoginForm'
import { useAuth } from 'src/hooks/useAuth'
import { useRedirectToHome } from 'src/hooks/useRedirectToHome'

import styles from './LoginPage.module.scss'

const LoginPage: FC = () => {
  const { isAuth } = useAuth()
  useRedirectToHome()

  if (isAuth) return null

  return (
    <div className={styles.wrapper}>
      <LoginForm />
    </div>
  )
}

export default LoginPage
