import { PayloadAction } from '@reduxjs/toolkit'
import api from 'helpers/sendsay'
import { all, put, takeLatest, call } from 'redux-saga/effects'

import { requestActions } from 'store/reducers/request'
import { TRequest } from 'types'

const {
  requestSuccess,
  requestFailure,
  addRequestToHistory,
  requestSend
} = requestActions

export function * requestSaga (action: PayloadAction<TRequest>) {
  try {
    const response = yield call(api.sendsay.request, action.payload)
    yield put(requestSuccess())
    yield put(
      addRequestToHistory(
        {
          request: action.payload,
          response: response,
          error: null
        })
    )
  } catch (e) {
    console.log(e)
    yield put(requestFailure())
    yield put(
      addRequestToHistory(
        {
          request: action.payload,
          response: null,
          error: e
        })
    )
  }
}

export default function * root () {
  yield all([
    takeLatest(requestSend.type, requestSaga)
  ])
}
