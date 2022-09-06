import * as linkActions from './link/linkActions'
import * as statisticsActions from './statistics/statisticsActions'
import * as userActions from './user/userActions'

export const allActionCreators = {
  ...userActions,
  ...linkActions,
  ...statisticsActions,
}
