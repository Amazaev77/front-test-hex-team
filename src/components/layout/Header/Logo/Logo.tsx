import { FC } from 'react'
import { Link } from 'react-router-dom'

import styles from './Logo.module.scss'

const Logo: FC = () => {
  return (
    <Link className={styles.logo} to='/'>
      <div className={styles.logo_image}>Hex.Team</div>
    </Link>
  )
}

export default Logo
