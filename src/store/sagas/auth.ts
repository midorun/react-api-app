import { PayloadAction } from '@reduxjs/toolkit'
import { all, put, call, takeLatest } from 'redux-saga/effects'

import api from 'helpers/sendsay'
import { EActionTypes } from 'store/constants'
import { authActions } from 'store/reducers/auth'
import { TAuthFailure, TAuthPayload } from 'types'

const { authenticateSuccess, authenticateFailure, logout } = authActions

export function * authenticateCheckSaga () {
  try {
    yield api.sendsay.request({
      action: 'pong'
    })
  } catch (error) {
    if (error.id === 'error/auth/failed') {
      yield call(logoutSaga)
    }
  }
}

export function * authenticateSaga ({ payload }: PayloadAction<TAuthPayload>) {
  try {
    yield api.sendsay
      .login({
        login: payload.login,
        sublogin: payload.sublogin,
        password: payload.password
      })
      .then(() => {
        document.cookie = `sendsay_session=${api.sendsay.session}`
      })

    yield put(
      authenticateSuccess({
        sessionKey: api.sendsay.session,
        login: payload.login,
        sublogin: payload.sublogin
      })
    )
  } catch (error) {
    document.cookie = ''
    console.log('err', error)
    yield put(authenticateFailure(error))
  }
}

export function * logoutSaga () {
  yield put(logout())
  document.cookie = ''
}

export default function * root () {
  yield all([
    takeLatest(EActionTypes.AUTHENTICATE, authenticateSaga),
    takeLatest(EActionTypes.AUTHENTICATE_CHECK, authenticateCheckSaga),
    takeLatest(EActionTypes.LOGOUT, logoutSaga)
  ])
}
