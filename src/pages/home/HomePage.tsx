import React, { FC } from 'react'
import Select from 'src/components/ui/select/Select'
import ShortForm from 'src/components/ui/short-form/ShortForm'
import Table from 'src/components/ui/table/Table'
import { urlOrderList } from 'src/utils/urlOrderList'

const HomePage: FC = () => {
  return (
    <div>
      <ShortForm />
      <Select options={urlOrderList} />
      <Table />
    </div>
  )
}

export default HomePage
