import cn from 'classnames'
import { FC, ReactNode } from 'react'

import styles from './Button.module.scss'

interface IButton {
  children: ReactNode
  size?: 'small' | 'large'
  fullWidth?: boolean
  disabled?: boolean
}

const Button: FC<IButton> = ({ children, size = 'small', fullWidth, disabled }) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.small]: size === 'small',
        [styles.large]: size === 'large',
        [styles.fullWidth]: fullWidth,
      })}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
