import React, { FC } from 'react'
import { Cell } from 'react-table'
import { getUrl } from 'src/api/apiHelpers'
import ClipBoardCopy from 'src/components/ui/clipboard-copy/ClipBoardCopy'
import { useActions } from 'src/hooks/useActions'
import { ILink } from 'src/store/link/types'

import styles from './TCell.module.scss'

interface ICell {
  cell: Cell
}

const TCell: FC<ICell> = ({ cell }) => {
  const {
    getCellProps,
    render,
    value,
    column: { id },
    row: { original },
  } = cell

  const { addCount } = useActions()

  const handleAddCount = () => addCount((original as ILink).id)

  const shortLink = getUrl('s') + '/' + value

  return (
    <td className={styles.cell} {...getCellProps()}>
      {id === 'counter' && render('Cell')}
      {id === 'target' && (
        <div className={styles.long}>
          <div className={styles.long_link}>
            <a href={value} target='_blank' rel='noreferrer'>
              {render('Cell')}
            </a>
          </div>
        </div>
      )}
      {id === 'short' && (
        <div className={styles.short}>
          <div className={styles.short_link}>
            <a
              onClick={handleAddCount}
              href={shortLink}
              target='_blank'
              rel='noreferrer'
            >
              {shortLink}
            </a>
            <div className={styles.short_link_clipboard}>
              <ClipBoardCopy text={shortLink} />
            </div>
          </div>
        </div>
      )}
    </td>
  )
}

export default TCell
