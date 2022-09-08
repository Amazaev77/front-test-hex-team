import { itemsCount } from 'src/constants/itemsCount'
import { useTypedSelector } from 'src/hooks/useTypedSelector'

export const usePagination = () => {
  const page = useTypedSelector((state) => state.statistics.page)

  const prevPage = page * itemsCount - itemsCount
  const currentPage = page * itemsCount
  const nextPage = page * itemsCount + itemsCount

  return { prevPage, nextPage, currentPage }
}
