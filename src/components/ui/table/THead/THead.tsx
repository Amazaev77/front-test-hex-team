import React, { FC } from 'react'
import { HeaderGroup } from 'react-table'
import Pagination from 'src/components/ui/pagination/Pagination'

import styles from './THead.module.scss'

interface ITHead {
  headerGroups: HeaderGroup[]
}

const THead: FC<ITHead> = ({ headerGroups }) => {
  return (
    <thead className={styles.thead}>
      <tr className={styles.paginationRow}>
        <th>
          <Pagination />
        </th>
      </tr>

      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
          ))}
        </tr>
      ))}
    </thead>
  )
}

export default THead
