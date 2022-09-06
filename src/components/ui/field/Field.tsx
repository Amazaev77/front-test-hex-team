import { FC, HTMLInputTypeAttribute } from 'react'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'
import Input from 'src/components/ui/input/Input'

import styles from './Field.module.scss'

interface IField {
  type?: HTMLInputTypeAttribute
  placeholder?: string
  label: string
  error?: FieldError
  register: UseFormRegisterReturn
}

const Field: FC<IField> = ({ error, label, register, ...rest }) => {
  return (
    <div className={styles.field}>
      <div className={styles.field_label}>{label}:</div>
      <Input {...register} {...rest} />
      {error && (
        <div className={styles.field_error}>
          <span>{error.message}</span>
        </div>
      )}
    </div>
  )
}

export default Field
