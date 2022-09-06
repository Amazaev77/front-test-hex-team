import { FC } from 'react'
import { Link } from 'react-router-dom'
import Logo from 'src/components/layout/Header/Logo/Logo'
import Button from 'src/components/ui/button/Button'
import { useActions } from 'src/hooks/useActions'
import { useAuth } from 'src/hooks/useAuth'

import styles from './Header.module.scss'

const Header: FC = () => {
  const { isAuth } = useAuth()
  const { logout } = useActions()

  const handleLogout = () => logout()

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Logo />
        <div className={styles.github}>
          <a href='https://github.com/Amazaev77/front-test-hex-team'>GitHub</a>
        </div>
      </div>
      <div className={styles.right}>
        {isAuth ? (
          <div className={styles.logout}>
            <Link onClick={handleLogout} to='/login'>
              Выйти
            </Link>
          </div>
        ) : (
          <Link to='/login'>
            <Button>Войти</Button>
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header
