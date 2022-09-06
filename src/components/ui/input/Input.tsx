import { HTMLInputTypeAttribute, forwardRef } from 'react'

import styles from './Input.module.scss'

interface IInput {
  type?: HTMLInputTypeAttribute
  placeholder?: string
}

const Input = forwardRef<HTMLInputElement, IInput>((props, ref) => {
  return <input ref={ref} className={styles.inp} {...props} />
})

export default Input
