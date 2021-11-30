import { all, fork } from 'redux-saga/effects'

import auth from 'store/sagas/auth'
import request from 'store/sagas/request'

export default function * root () {
  yield all([fork(auth), fork(request)])
}
