import { Column } from 'react-table'

type ColumnType = Array<Column<object>>

export const columns: ColumnType = [
  {
    Header: 'Оригинальный URL',
    accessor: 'target',
  },
  {
    Header: 'Короткий URL',
    accessor: 'short',
  },
  {
    Header: 'Просмотры',
    accessor: 'counter',
  },
]
