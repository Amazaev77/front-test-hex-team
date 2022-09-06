import { FC } from 'react'
import RegisterForm from 'src/components/ui/form/RegisterForm'
import { useAuth } from 'src/hooks/useAuth'
import { useRedirectToHome } from 'src/hooks/useRedirectToHome'

import styles from './RegisterPage.module.scss'

const RegisterPage: FC = () => {
  useRedirectToHome()

  const { isAuth } = useAuth()

  if (isAuth) return null

  return (
    <div className={styles.wrapper}>
      <RegisterForm />
    </div>
  )
}

export default RegisterPage
