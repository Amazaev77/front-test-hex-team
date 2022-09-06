import cn from 'classnames'
import React, { FC } from 'react'
import { useActions } from 'src/hooks/useActions'
import { useTypedSelector } from 'src/hooks/useTypedSelector'

import styles from './Pagination.module.scss'

const Pagination: FC = () => {
  const { toNextPage, toPrevPage } = useActions()

  const page = useTypedSelector((state) => state.statistics.page)
  const isLoading = useTypedSelector((state) => state.statistics.isLoading)

  const prevPage = page * 5 - 5
  const currentPage = page * 5
  const nextPage = page * 5 + 5

  return (
    <div className={styles.box}>
      <div className={styles.pages}>
        {prevPage > 0 && <div className={styles.pages_prevPage}>{prevPage}</div>}
        <div className={styles.pages_currentPage}>{currentPage}</div>
        {nextPage < 20 && <div className={styles.pages_nextPage}>{nextPage}</div>}
      </div>
      <div className={cn(styles.buttons, { [styles.disabled]: isLoading })}>
        {prevPage > 0 && (
          <button
            disabled={isLoading}
            className={styles.buttons_prev}
            onClick={() => toPrevPage()}
          >
            {'<'}
          </button>
        )}

        {nextPage < 20 && (
          <button
            disabled={isLoading}
            className={styles.buttons_next}
            onClick={() => toNextPage()}
          >
            {'>'}
          </button>
        )}
      </div>
    </div>
  )
}

export default Pagination
