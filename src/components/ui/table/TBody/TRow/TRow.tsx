import React, { FC } from 'react'
import { Row } from 'react-table'

import TCell from './TCell/TCell'
import styles from './TRow.module.scss'

interface ITRow {
  row: Row
}

const TRow: FC<ITRow> = ({ row }) => {
  return (
    <tr className={styles.row} {...row.getRowProps()}>
      {row.cells.map((cell) => {
        return <TCell key={cell.getCellProps().key} cell={cell} />
      })}
    </tr>
  )
}

export default TRow
