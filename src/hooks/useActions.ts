import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { allActionCreators } from 'src/store/action-creators'
import { AppDispatch } from 'src/store/store'

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>()
  return bindActionCreators(allActionCreators, dispatch)
}
