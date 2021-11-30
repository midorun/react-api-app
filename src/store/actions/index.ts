import { authActions } from 'store/reducers/auth'
import { requestActions } from 'store/reducers/request'

export default {
  ...authActions,
  ...requestActions
}
