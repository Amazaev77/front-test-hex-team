import React, { FC } from 'react'
import { Row } from 'react-table'

import styles from './TBody.module.scss'
import TRow from './TRow/TRow'

interface ITBody {
  rows: Row[]
  prepareRow: (row: Row) => any
  getTableBodyProps: () => any
}

const TBody: FC<ITBody> = ({ getTableBodyProps, rows, prepareRow }) => {
  return (
    <tbody className={styles.body} {...getTableBodyProps()}>
      {rows.map((row) => {
        prepareRow(row)
        return <TRow key={row.getRowProps().key} row={row} />
      })}
    </tbody>
  )
}

export default TBody
