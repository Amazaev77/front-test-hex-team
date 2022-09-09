import React, { FC } from 'react'
import { useActions } from 'src/hooks/useActions'
import { usePagination } from 'src/hooks/usePagination'
import { useTypedSelector } from 'src/hooks/useTypedSelector'

import styles from './Pagination.module.scss'

const Pagination: FC = () => {
  const { toNextPage, toPrevPage } = useActions()
  const { prevPage, currentPage, nextPage } = usePagination()

  const isLoading = useTypedSelector((state) => state.statistics.isLoading)
  const data = useTypedSelector((state) => state.statistics.data)

  const handleNextPage = () => toNextPage()
  const handlePrevPage = () => toPrevPage()

  return (
    <div className={styles.box}>
      <div className={styles.pages}>
        {prevPage > 0 && <div className={styles.pages_prevPage}>{prevPage}</div>}
        <div className={styles.pages_currentPage}>{currentPage}</div>
        {nextPage < 20 && !!data.length && !isLoading && (
          <div className={styles.pages_nextPage}>{nextPage}</div>
        )}
      </div>
      <div className={styles.buttons}>
        <button
          disabled={isLoading || !(prevPage > 0)}
          className={styles.buttons_prev}
          onClick={handlePrevPage}
        >
          {'<'}
        </button>
        <button
          disabled={isLoading || data.length < 5 || !(nextPage < 20)}
          className={styles.buttons_next}
          onClick={handleNextPage}
        >
          {'>'}
        </button>
      </div>
    </div>
  )
}

export default Pagination
