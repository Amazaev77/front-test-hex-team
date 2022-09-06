export interface IOrder {
  label: string
  value: string
}

export const urlOrderList: IOrder[] = [
  { label: 'Сокращенный url / короткие', value: 'asc_short' },
  { label: 'Сокращенный url / длинные', value: 'desc_short' },
  { label: 'Мало кликов', value: 'asc_counter' },
  { label: 'Больше кликов', value: 'desc_counter' },
  { label: 'Оригинальный url / короткие', value: 'asc_target' },
  { label: 'Оригинальный url / длинные', value: 'desc_target' },
]
