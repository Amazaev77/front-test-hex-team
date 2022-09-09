import React, { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Row } from 'react-table'
import { useTypedSelector } from 'src/hooks/useTypedSelector'

import styles from './TBody.module.scss'
import TRow from './TRow/TRow'

interface ITBody {
  rows: Row[]
  prepareRow: (row: Row) => any
  getTableBodyProps: () => any
}

const TBody: FC<ITBody> = ({ getTableBodyProps, rows, prepareRow }) => {
  const isLoading = useTypedSelector((state) => state.statistics.isLoading)
  const data = useTypedSelector((state) => state.statistics.data)

  return (
    <tbody className={styles.body} {...getTableBodyProps()}>
      {!data.length && !isLoading && (
        <tr className={styles.empty}>
          <td>Страница пуста</td>
        </tr>
      )}
      {isLoading
        ? [1, 2, 3, 4, 5].map((num) => (
            <tr className={styles.skeleton} key={num}>
              <td>
                <Skeleton width='100%' height={35} />
              </td>
              <td>
                <Skeleton width='100%' height={35} />
              </td>
              <td>
                <Skeleton width='100%' height={35} />
              </td>
            </tr>
          ))
        : rows.map((row) => {
            prepareRow(row)
            return <TRow key={row.getRowProps().key} row={row} />
          })}
    </tbody>
  )
}

export default TBody
