import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import Button from 'src/components/ui/button/Button'
import Field from 'src/components/ui/field/Field'
import { IFields } from 'src/components/ui/form/Form.interface'
import { useActions } from 'src/hooks/useActions'
import { useTypedSelector } from 'src/hooks/useTypedSelector'

import styles from './Form.module.scss'

const RegisterForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFields>()
  const actions = useActions()
  const navigate = useNavigate()

  const error = useTypedSelector((state) => state.user.error)
  const isLoading = useTypedSelector((state) => state.user.isLoading)

  const onSubmit: SubmitHandler<IFields> = (data) => {
    reset()
    actions.register(data)
    navigate('/login')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Field
        label='Имя пользователя'
        placeholder='Имя пользователя...'
        error={errors.username}
        register={register('username', { required: 'Username is required' })}
      />
      <Field
        label='Пароль'
        placeholder='Пароль...'
        type='password'
        error={errors.password}
        register={register('password', { required: 'Password is required' })}
      />
      <Button disabled={isLoading} size='large' fullWidth>
        Зарегистрироваться
      </Button>
      {error && (
        <div className={styles.form_error}>
          <span>
            {error.status === 400
              ? 'Wrong login or password'
              : 'An error occurred during authorization'}
          </span>
        </div>
      )}
      <div className={styles.form_to_register}>
        <Link to='/login'>Авторизация</Link>
      </div>
    </form>
  )
}

export default RegisterForm
