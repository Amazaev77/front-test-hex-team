import { FC } from 'react'
import ReactSelect, { OnChangeValue } from 'react-select'
import { useActions } from 'src/hooks/useActions'
import { useTypedSelector } from 'src/hooks/useTypedSelector'

import styles from './Select.module.scss'

export interface IOption {
  label: string
  value: string
}

interface ISelect {
  options: IOption[]
}

const Select: FC<ISelect> = ({ options }) => {
  const { fetchStatistics } = useActions()
  const token = useTypedSelector((state) => state.user.token?.access_token)
  const handleChange = (newValue: OnChangeValue<IOption, boolean>) => {
    fetchStatistics({
      token: token as string,
      order: (newValue as IOption).value,
    })
  }

  return (
    <div className={styles.select}>
      <ReactSelect
        defaultValue={options[3]}
        classNamePrefix='select'
        onChange={handleChange}
        options={options}
      />
    </div>
  )
}

export default Select
