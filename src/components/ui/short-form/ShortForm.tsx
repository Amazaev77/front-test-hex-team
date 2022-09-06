import { FC } from 'react'
import { useForm } from 'react-hook-form'
import Input from 'src/components/ui/input/Input'
import SendIcon from 'src/components/ui/send-icon/SendIcon'
import { validUrl } from 'src/constants/regex/validUrl'
import { useActions } from 'src/hooks/useActions'
import { useTypedSelector } from 'src/hooks/useTypedSelector'

import styles from './ShortForm.module.scss'

interface IFields {
  longUrl: string
}

const ShortForm: FC = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IFields>()

  const { sendLongLink } = useActions()

  const token = useTypedSelector((state) => state.user.token?.access_token)

  const onSubmit = (data: IFields) => {
    reset()
    sendLongLink({ link: data.longUrl, token: token as string })
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder='Введите длинный URL'
        {...register('longUrl', {
          pattern: {
            value: validUrl,
            message: 'Невалидный Url',
          },
        })}
      />
      <button className={styles.form_sendIcon}>
        <SendIcon />
      </button>
      <div className={styles.form_error}>{errors.longUrl?.message}</div>
    </form>
  )
}

export default ShortForm
