import React, { FC, useEffect } from 'react'
import { useTable } from 'react-table'
import TBody from 'src/components/ui/table/TBody/TBody'
import THead from 'src/components/ui/table/THead/THead'
import { columns } from 'src/components/ui/table/Table.data'
import { useActions } from 'src/hooks/useActions'
import { useTypedSelector } from 'src/hooks/useTypedSelector'

import styles from './Table.module.scss'

const Table: FC = () => {
  const { fetchStatistics } = useActions()

  const token = useTypedSelector((state) => state.user.token?.access_token)
  const page = useTypedSelector((state) => state.statistics.page)
  const data = useTypedSelector((state) => state.statistics.data)

  useEffect(() => {
    fetchStatistics({ token: token as string, page })
  }, [token, page])

  const { getTableProps, getTableBodyProps, prepareRow, rows, headerGroups } = useTable(
    {
      columns,
      data,
    },
  )
  return (
    <table className={styles.table} {...getTableProps()}>
      <THead headerGroups={headerGroups} />

      <TBody
        getTableBodyProps={getTableBodyProps}
        prepareRow={prepareRow}
        rows={rows}
      />
    </table>
  )
}

export default Table
