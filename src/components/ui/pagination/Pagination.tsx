import cn from 'classnames'
import React, { FC } from 'react'
import { itemsCount } from 'src/constants/itemsCount'
import { useActions } from 'src/hooks/useActions'
import { usePagination } from 'src/hooks/usePagination'
import { useTypedSelector } from 'src/hooks/useTypedSelector'

import styles from './Pagination.module.scss'

const Pagination: FC = () => {
  const { toNextPage, toPrevPage } = useActions()
  const { prevPage, currentPage, nextPage } = usePagination()

  const isLoading = useTypedSelector((state) => state.statistics.isLoading)

  const handleNextPage = () => toNextPage()
  const handlePrevPage = () => toPrevPage()

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
            onClick={handlePrevPage}
          >
            {'<'}
          </button>
        )}

        {nextPage < 20 && (
          <button
            disabled={isLoading}
            className={styles.buttons_next}
            onClick={handleNextPage}
          >
            {'>'}
          </button>
        )}
      </div>
    </div>
  )
}

export default Pagination
